pragma solidity ^0.4.17;

contract CampaignFactory {
    mapping(string => address[]) deployedCampaigns;
    
    function createCampaign(string title, string category, uint minimum, string description, uint goal, string deadline,
        string investmentDescription ) public {
        address newCampaign = new Campaign(msg.sender, title, category, minimum, description, goal, deadline, investmentDescription);
        deployedCampaigns[category].push(newCampaign);
    }
    
    function getDeployedCampaign(string category) public view returns (address[]) {
        return deployedCampaigns[category];
    }
}

contract Campaign {
    
    struct Request {
        string requestDescription;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    struct User {
       // string name;
        address userAddress;
        uint amount;
    }
    
    address public mManager;
    string public mTitle;
    string public mDescription;
    string public mCategory;
    uint public mMinimumContribution;
    uint public mGoal;
    string public mDeadline;
    string public mInvestmentDescription;
    
    Request[] public mRequests;
    
    mapping(address => User) public mInvestors;
    uint public mInvestorsCount;
    
    modifier restricted(){
        require(msg.sender == mManager);
        _;
    }
    
    modifier isContributor(){
        require(mInvestors[msg.sender].amount != 0);
        _;
    }
    
    constructor(address creator, string title, string category, uint minimum, string description, uint goal, string deadline,
        string investmentDescription) public {
        mManager = creator;
        mTitle = title;
        mCategory = category;
        mMinimumContribution = minimum;
        mDescription = description;
        mGoal = goal;
        mDeadline = deadline;
        mInvestmentDescription = investmentDescription;
    }
    
    function contribute() public payable {
        require(msg.value > mMinimumContribution);
        
        if(mInvestors[msg.sender].amount != 0) {
            mInvestors[msg.sender].amount += msg.value;
        } else {
            User memory newInvestor = User({
                userAddress : msg.sender,
                amount : msg.value
            });
        
            mInvestors[msg.sender] = newInvestor;
            mInvestorsCount++;
        }
        
    }
    
    function createRequest(string requestDescription, uint value, address recipient) public payable restricted {
        Request memory newRequest = Request({
           requestDescription : requestDescription,
           value : value,
           recipient : recipient,
           complete : false,
           approvalCount : 0
        });
        
        mRequests.push(newRequest);
        
    }
    
    function approveRequest(uint index) public isContributor{
        Request storage request = mRequests[index];
        
        require(mInvestors[msg.sender].amount != 0);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
        
        
    }
    
    function finalizeRequest(uint index) public payable restricted {
        Request storage request = mRequests[index];
        
        require(request.approvalCount > (mInvestorsCount/2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
        
    }
}

