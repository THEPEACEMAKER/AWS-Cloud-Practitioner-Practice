const questions = [
  {
    id: "1",
    question:
      "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
    options: [
      {
        value: "AWS CLI.",
      },
      {
        value: "AWS API.",
      },
      {
        value: "AWS SDK.",
      },
      {
        value: "AWS Management Console.",
        answer: 1,
      },
    ],
    tags: ["User Interface", "AWS Management Console."],
  },
  {
    id: "2",
    question:
      "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    options: [
      {
        value:
          "Replacing an existing EC2 instance with a larger, more powerful one.",
      },
      {
        value:
          "Increasing the compute capacity of a single EC< instance to address the growing demands of an application.",
      },
      {
        value: "Adding more RAM capacity to an EC2 instance.",
      },
      {
        value:
          "Adding more EC2 instances of the same size to handle an increase in traffic.",
        answer: 1,
      },
    ],
    tags: ["EC2", "scaling"],
  },
  {
    id: "3",
    question:
      "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
    options: [
      {
        value: "Amazon Inspector.",
      },
      {
        value: "AWS CloudTrail.",
        answer: 1,
      },
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "EC2 Instance Usage Report.",
      },
    ],
    tags: ["AWS CloudTrail", "EC2"],
  },
  {
    id: "4",
    question:
      "Which of the below options are related to the reliability of AWS? (Choose TWO)",
    options: [
      {
        value:
          "Applying the principle of least privilege to all AWS resources.",
      },
      {
        value: "Automatically provisioning new resources to meet demand.",
        answer: 1,
      },
      {
        value:
          "All AWS services are considered Global Services, and this design helps customers serve their international users.",
      },
      {
        value: "Providing compensation to customers if issues occur.",
      },
      {
        value: "Ability to recover quickly from failures.",
        answer: 1,
      },
    ],
    tags: ["reliability"],
  },
  {
    id: "5",
    question:
      "Which statement is true regarding the AWS Shared Responsibility Model?",
    options: [
      {
        value: "Responsibilities vary depending on the services used.",
        answer: 1,
      },
      {
        value: "Security of the IaaS services is the responsibility of AWS.",
      },
      {
        value: "Patching the guest OS is always the responsibility of AWS.",
      },
      {
        value:
          "Security of the managed services is the responsibility of the customer.",
      },
    ],
    tags: ["AWS Shared Responsibility Model"],
  },
  {
    id: "6",
    question:
      "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
    options: [
      {
        value:
          "The Reserved Instance discounts can only be shared with the master account.",
      },
      {
        value:
          "All accounts can receive the hourly cost benefit of the Reserved Instances (Comect).",
        answer: 1,
      },
      {
        value:
          "The purchased instances will have better performance than On-demand instances.",
      },
      {
        value:
          "There are no cost benefits from using consolidated billing; It is for informational purposes only.",
      },
    ],
    tags: ["consolidated billing", "AWS billing"],
  },
  {
    id: "7",
    question:
      "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
    options: [
      {
        value:
          "Deploy the application across multiple Availability Zones and Edge locations.",
      },
      {
        value:
          "Deploy the application across multiple Availability Zones and subnets.",
      },
      {
        value:
          "Deploy the application across multiple Regions and Availability Zones (Co ).",
        answer: 1,
      },
      {
        value: "Deploy the application across multiple VPC's and subnets.",
      },
    ],
    tags: [],
  },
  {
    id: "8",
    question: "What does AWS Snowball provide? (Choose TWO)",
    options: [
      {
        value:
          "Built-in computing capabilities that allow customers to process data locally.",
        answer: 1,
      },
      {
        value:
          "A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
      },
      {
        value:
          "A hybrid cloud storage between on-premises environments and the AWS Cloud.",
      },
      {
        value:
          "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
      },
      {
        value:
          "Secure transfer of large amounts of data into and out of the AWS.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "9",
    question:
      "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
    options: [
      {
        value: "AWS Health Dashboard.",
      },
      {
        value: "AWS Support Concierge.",
        answer: 1,
      },
      {
        value: "AWS Customer Service.",
      },
      {
        value: "AWS Operations Support.",
      },
    ],
    tags: [],
  },
  {
    id: "10",
    question:
      "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
    options: [
      {
        value: "Applying the Amazon Connect latency-based routing policy.",
      },
      {
        value: "Registering a new US domain name to serve the users in the US.",
      },
      {
        value:
          "Building a new data center in the US and implementing a hybrid model.",
      },
      {
        value:
          "Deploying new Amazon EC2 instances in a Region located in the US.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "11",
    question:
      "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
    options: [
      {
        value: "IAM roles.",
      },
      {
        value: "IAM users.",
      },
      {
        value: "IAM user groups.",
        answer: 1,
      },
      {
        value: "AWS Organizations.",
      },
    ],
    tags: [],
  },
  {
    id: "12",
    question:
      "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
    options: [
      {
        value: "AWS OpsWorks.",
      },
      {
        value: "AWS Database Migration Service.",
        answer: 1,
      },
      {
        value: "AWS Server Migration Service.",
      },
      {
        value: "AWS Application Discovery Service.",
      },
    ],
    tags: [],
  },
  {
    id: "13",
    question:
      "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
    options: [
      {
        value: "Build security in every layer.",
      },
      {
        value: "Parallelize tasks.",
      },
      {
        value: "Implement elasticity.",
        answer: 1,
      },
      {
        value: "Adopt monolithic architecture.",
      },
    ],
    tags: [],
  },
  {
    id: "14",
    question:
      "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
    options: [
      {
        value: "Increasing speed and agility.",
        answer: 1,
      },
      {
        value: "There is no need to worry about security.",
      },
      {
        value: "Gaining complete control over the physical infrastructure.",
      },
      {
        value: "Operating applications on behalf of customers.",
      },
      {
        value:
          "All of the physical security and most of the data/network security are taken care of for you.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "15",
    question:
      "What is the advantage of the AWS-recommended practice of 'decoupling' applications?",
    options: [
      {
        value: "Allows treating an application as a single, cohesive unit.",
      },
      {
        value:
          "Reduces inter-dependencies so that failures do not impact other components of the application.",
        answer: 1,
      },
      {
        value:
          "Allows updates of any monolithic application quickly and easily.",
      },
      {
        value: "Allows tracking of any API call made to any AWS service.",
      },
    ],
    tags: [],
  },
  {
    id: "16",
    question:
      "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
    options: [
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Pricing Calculator.",
      },
      {
        value: "AWS Systems Manager.",
      },
      {
        value: "AWS Cost & Usage Reports.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "17",
    question:
      "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
    options: [
      {
        value:
          "AWS services' costs will be reduced to half the original price.",
      },
      {
        value:
          "The consolidated billing feature is just for organizational purpose.",
      },
      {
        value: "Each AWS account gets volume discounts.",
        answer: 1,
      },
      {
        value:
          "Each AWS account gets five times the free-tier services capacity.",
      },
    ],
    tags: ["consolidated billing", "AWS billing"],
  },
  {
    id: "18",
    question:
      "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
    options: [
      {
        value: "Regularly update firmware on EBS devices.",
      },
      {
        value: "Create EBS snapshots.",
        answer: 1,
      },
      {
        value: "Ensure that EBS data is encrypted at rest.",
        answer: 1,
      },
      {
        value: "Store a backup daily in an external drive.",
      },
      {
        value: "Prevent any unauthorized access to AWS data centers.",
      },
    ],
    tags: [],
  },
  {
    id: "19",
    question:
      "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture's design?",
    options: [
      {
        value:
          "By automatically scaling your on-premises resources based on changes in demand.",
      },
      {
        value:
          "By automatically scaling your AWS resources using an Elastic Load Balancer.",
      },
      {
        value:
          "By reducing interdependencies between application components wherever possible.",
      },
      {
        value:
          "By automatically provisioning the required AWS resources based on changes in demand.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "20",
    question:
      "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
    options: [
      {
        value:
          "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
        answer: 1,
      },
      {
        value:
          "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
      },
      {
        value:
          "Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
        answer: 1,
      },
      {
        value:
          "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.",
      },
      {
        value:
          "Configure the Amazon Connect Service to alert the company when the threshold is exceeded.",
      },
    ],
    tags: [],
  },
  {
    id: "21",
    question:
      "What does Amazon CloudFront use to distribute content to global users with low latency?",
    options: [
      {
        value: "AWS Global Accelerator.",
      },
      {
        value: "AWS Regions.",
      },
      {
        value: "AWS Edge Locations.",
        answer: 1,
      },
      {
        value: "AWS Availability Zones.",
      },
    ],
    tags: [],
  },
  {
    id: "22",
    question: "What does the 'Principle of Least Privilege' refer to?",
    options: [
      {
        value:
          "You should grant your users only the permissions they need when they need them and nothing more.",
        answer: 1,
      },
      {
        value:
          "AllIAM users should have at least the necessary permissions to access the core AWS services.",
      },
      {
        value:
          "All trusted IAM users should have access to any AWS service in the respective AWS account.",
      },
      {
        value:
          "IAM users should not be granted any permissions; to keep your account safe.",
      },
    ],
    tags: [],
  },
  {
    id: "23",
    question:
      "Which of the following does NOT belong to the AWS Cloud Computing models?",
    options: [
      {
        value: "Platform as a Service (PaaS).",
      },
      {
        value: "Infrastructure as a Service (1aaS).",
      },
      {
        value: "Software as a Service (SaaS).",
      },
      {
        value: "Networking as a Service (NaaS).",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "24",
    question:
      "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
    options: [
      {
        value: "S3 Intelligent-Tiering.",
      },
      {
        value: "AWS Marketplace.",
      },
      {
        value: "Amazon S3 Glacier Deep Archive.",
        answer: 1,
      },
      {
        value: "Amazon EBS.",
      },
    ],
    tags: [],
  },
  {
    id: "25",
    question: "Which service provides DNS in the AWS cloud?",
    options: [
      {
        value: "Route 53.",
        answer: 1,
      },
      {
        value: "AWS Config.",
      },
      {
        value: "Amazon CloudFront.",
      },
      {
        value: "Amazon EMR.",
      },
    ],
    tags: [],
  },
  {
    id: "26",
    question:
      "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
    options: [
      {
        value: "AWS Shield.",
        answer: 1,
      },
      {
        value: "AWS Config.",
      },
      {
        value: "Amazon Cognito.",
      },
      {
        value: "AWS WAF.",
        answer: 1,
      },
      {
        value: "AWS KMS.",
      },
    ],
    tags: [],
  },
  {
    id: "27",
    question:
      "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application's response time is optimal?",
    options: [
      {
        value: "AWS OpsWorks.",
      },
      {
        value: "AWS Storage Gateway.",
      },
      {
        value: "Amazon EBS volume.",
      },
      {
        value: "Amazon ElastiCache.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "28",
    question:
      "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    options: [
      {
        value: "Reserved instances.",
      },
      {
        value: "Spot instances.",
      },
      {
        value: "Dedicated instances.",
      },
      {
        value: "On-demand instances.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "29",
    question:
      "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    options: [
      {
        value: "Reserved Instances.",
      },
      {
        value: "On-demand Instances.",
      },
      {
        value: "Dedicated Instances.",
      },
      {
        value: "Spot Instances.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "30",
    question:
      "Which of the following can be described as a global content delivery network (CDN) service?",
    options: [
      {
        value: "AWS VPN.",
      },
      {
        value: "AWS Direct Connect.",
      },
      {
        value: "AWS Regions.",
      },
      {
        value: "Amazon CloudFront.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "31",
    question:
      "Which of the following services allows customers to manage their agreements with AWS?",
    options: [
      {
        value: "AWS Artifact.",
        answer: 1,
      },
      {
        value: "AWS Certificate Manager.",
      },
      {
        value: "AWS Systems Manager.",
      },
      {
        value: "AWS Organizations.",
      },
    ],
    tags: [],
  },
  {
    id: "32",
    question:
      "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
    options: [
      {
        value: "Amazon VPC.",
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon Elastic MapReduce.",
        answer: 1,
      },
      {
        value: "AWS IAM.",
      },
      {
        value: "Amazon Elastic Compute Cloud.",
      },
    ],
    tags: [],
  },
  {
    id: "33",
    question:
      "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
    options: [
      {
        value: "Amazon Aurora.",
      },
      {
        value: "Amazon DynamoDB.",
        answer: 1,
      },
      {
        value: "Amazon Elastic Block Store.",
      },
      {
        value: "Amazon Redshift.",
      },
    ],
    tags: [],
  },
  {
    id: "34",
    question:
      "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    options: [
      {
        value: "AWS Identity and Access Management (IAM) user.",
      },
      {
        value: "Infrastructure Event Management (IEM) engineer.",
      },
      {
        value: "AWS Consulting Partners.",
      },
      {
        value: "Technical Account Manager (TAM).",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "35",
    question:
      "How can you view the distribution of AWS spending in one of your AWS accounts?",
    options: [
      {
        value: "By using Amazon VPC console.",
      },
      {
        value: "By contacting the AWS Support team.",
      },
      {
        value: "By using AWS Cost Explorer.",
        answer: 1,
      },
      {
        value: "By contacting the AWS Finance team.",
      },
    ],
    tags: [],
  },
  {
    id: "36",
    question:
      "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    options: [
      {
        value: "Access keys.",
        answer: 1,
      },
      {
        value: "Secret token.",
      },
      {
        value: "UserID.",
      },
      {
        value: "User name and password.",
      },
    ],
    tags: [],
  },
  {
    id: "37",
    question:
      "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    options: [
      {
        value: "Contact the AWS Customer Service team.",
      },
      {
        value: "Contact the AWS Abuse team.",
        answer: 1,
      },
      {
        value: "Contact the AWS Concierge team.",
      },
      {
        value: "Contact the AWS Security team.",
      },
    ],
    tags: [],
  },
  {
    id: "38",
    question: "Select TWO examples of the AWS shared controls.",
    options: [
      {
        value: "Patch Management.",
        answer: 1,
      },
      {
        value: "IAM Management.",
      },
      {
        value: "VPC Management.",
      },
      {
        value: "Configuration Management.",
        answer: 1,
      },
      {
        value: "Data Center operations.",
      },
    ],
    tags: [],
  },
  {
    id: "39",
    question:
      "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
    options: [
      {
        value: "ELB.",
      },
      {
        value: "Auto Scaling.",
        answer: 1,
      },
      {
        value: "Amazon Athen.",
      },
      {
        value: "ECR.",
      },
      {
        value: "Amazon EC2.",
      },
    ],
    tags: [],
  },
  {
    id: "40",
    question:
      "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
    options: [
      {
        value: "Amazon SNS.",
      },
      {
        value: "Amazon Kinesis Video Streams.",
      },
      {
        value: "AWS CloudFormation.",
      },
      {
        value: "Amazon CloudFront.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "41",
    question:
      "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    options: [
      {
        value: "A MySQL database installed on an EC2 instance.",
      },
      {
        value: "Amazon Aurora.",
        answer: 1,
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon Neptune.",
      },
    ],
    tags: [],
  },
  {
    id: "42",
    question:
      "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    options: [
      {
        value: "AWS CloudFormation.",
        answer: 1,
      },
      {
        value: "AWS Config.",
      },
      {
        value: "Amazon SES.",
      },
      {
        value: "Amazon EMR.",
      },
    ],
    tags: [],
  },
  {
    id: "43",
    question:
      "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    options: [
      {
        value: "Client-side encryption.",
      },
      {
        value: "Configuring infrastructure devices.",
        answer: 1,
      },
      {
        value: "Server-side encryption.",
      },
      {
        value: "Filtering traffic with Security Groups.",
      },
    ],
    tags: [],
  },
  {
    id: "44",
    question: "What does the AWS Health Dashboard provide? (Choose TWO)",
    options: [
      {
        value:
          "Detailed troubleshooting guidance to address AWS events impacting your resources.",
        answer: 1,
      },
      {
        value: "Health checks for Auto Scaling instances.",
      },
      {
        value: "Recommendations for Cost Optimization.",
      },
      {
        value: "A dashboard detailing vulnerabilities in your applications.",
      },
      {
        value: "Personalized view of AWS service health.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "45",
    question:
      "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can't reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
    options: [
      {
        value: "AWS Lambda.",
      },
      {
        value: "AWS Config.",
      },
      {
        value: "Amazon CloudWatch.",
        answer: 1,
      },
      {
        value: "AWS CloudTrail.",
      },
    ],
    tags: [],
  },
  {
    id: "46",
    question:
      "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
    options: [
      {
        value: "AWS Shield.",
      },
      {
        value: "AWS Management Console.",
      },
      {
        value: "AWS Secrets Manager.",
      },
      {
        value: "AWS Trusted Advisor.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "47",
    question:
      "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
    options: [
      {
        value: "Amazon S3 provides unlimited storage for any type of data.",
      },
      {
        value: "Amazon S3 can run any type of application or backend system.",
        answer: 1,
      },
      {
        value:
          "Amazon S3 stores any number of objects, but with object size limits.",
      },
      {
        value:
          "Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.",
        answer: 1,
      },
      {
        value: "Amazon S3 provides 99.999999999% (11 9's) of data durability.",
      },
    ],
    tags: [],
  },
  {
    id: "48",
    question:
      "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      {
        value: "Disk disposal.",
      },
      {
        value: "Controlling physical access to compute resources.",
      },
      {
        value: "Patching the Network infrastructure.",
      },
      {
        value: "Setting password complexity rules.",
      },
      {
        value: "Configuring network access rules.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "49",
    question:
      "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    options: [
      {
        value: "Amazon Aurora.",
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "AWS Quick Start reference deployments.",
        answer: 1,
      },
      {
        value: "AWS OpsWorks.",
      },
    ],
    tags: [],
  },
  {
    id: "50",
    question:
      "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
    options: [
      {
        value: "Elastic RI.",
      },
      {
        value: "Premium RI.",
      },
      {
        value: "Standard RI.",
      },
      {
        value: "Convertible RI.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "51",
    question:
      "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
    options: [
      {
        value: "AWS Organizations.",
        answer: 1,
      },
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "IAM User Groups.",
      },
      {
        value: "AWS Config.",
      },
    ],
    tags: [],
  },
  {
    id: "52",
    question: "Which service provides object-level storage in AWS?",
    options: [
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon Instance Store.",
      },
      {
        value: "Amazon EFS.",
      },
      {
        value: "Amazon S3.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "53",
    question:
      "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
    options: [
      {
        value: "AWS Elastic Load Balancer.",
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Auto Scaling.",
        answer: 1,
      },
      {
        value: "AWS Cost Explorer.",
      },
    ],
    tags: [],
  },
  {
    id: "54",
    question:
      "Which S3 storage class is best for data with unpredictable access patterns?",
    options: [
      {
        value: "Amazon S3 Intelligent-Tiering.",
        answer: 1,
      },
      {
        value: "Amazon S3 Glacier Flexible Retrieval.",
      },
      {
        value: "Amazon S3 Standard.",
      },
      {
        value: "Amazon S3 Standard-Infrequent Access.",
      },
    ],
    tags: [],
  },
  {
    id: "55",
    question:
      "What is the AWS database service that allows you to upload data structured in key-value format?",
    options: [
      {
        value: "Amazon DynamoDB.",
        answer: 1,
      },
      {
        value: "Amazon Aurora.",
      },
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon RDS.",
      },
    ],
    tags: [],
  },
  {
    id: "56",
    question:
      "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
    options: [
      {
        value:
          "You have to pay a start-up fee when launching a new instance for the first time.",
        answer: 1,
      },
      {
        value:
          "The on-demand instances follow the AWS pay-as-you-go pricing model.",
      },
      {
        value:
          "With on-demand instances, no longer-term commitments or upfront payments are needed.",
      },
      {
        value:
          "When using on-demand Linux instances, you are charged per second based on an hourly rate.",
      },
    ],
    tags: [],
  },
  {
    id: "57",
    question:
      "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
    options: [
      {
        value: "AWS Trusted Advisor.",
        answer: 1,
      },
      {
        value: "Amazon Inspector.",
        answer: 1,
      },
      {
        value: "Amazon SNS.",
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "Concierge Support Team.",
      },
    ],
    tags: [],
  },
  {
    id: "58",
    question:
      "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    options: [
      {
        value: "Encrypted keys.",
      },
      {
        value: "Email verification.",
      },
      {
        value: "AWS KMS.",
      },
      {
        value: "AWS MFA.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "59",
    question:
      "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
    options: [
      {
        value: "AWS Knowledge Center.",
      },
      {
        value: "AWS Health Dashboard.",
      },
      {
        value: "Infrastructure Event Management.",
        answer: 1,
      },
      {
        value: "AWS Support Concierge Service.",
      },
    ],
    tags: [],
  },
  {
    id: "60",
    question:
      "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
    options: [
      {
        value: "Amazon RDS.",
        answer: 1,
      },
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon CloudWatch.",
      },
    ],
    tags: [],
  },
  {
    id: "61",
    question:
      "Which of the below is a best-practice when designing solutions on AWS?",
    options: [
      {
        value:
          "Invest heavily in architecting your environment, as it is not easy to change your design later.",
      },
      {
        value:
          "Use AWS reservations to reduce costs when testing your production environment.",
      },
      {
        value:
          "Automate wherever possible to make architectural experimentation easier.",
        answer: 1,
      },
      {
        value:
          "Provision a large compute capacity to handle any spikes in load",
      },
    ],
    tags: [],
  },
  {
    id: "62",
    question:
      "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
    options: [
      {
        value: "Penetration testing is not allowed in AWS.",
      },
      {
        value:
          "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
      },
      {
        value:
          "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
        answer: 1,
      },
      {
        value:
          "The AWS customers are only allowed to perform penetration testing on services managed by AWS.",
      },
    ],
    tags: [],
  },
  {
    id: "63",
    question:
      "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
    options: [
      {
        value: "Amazon SQS.",
        answer: 1,
      },
      {
        value: "Amazon SES.",
      },
      {
        value: "AWS Direct Connect.",
      },
      {
        value: "Amazon Connect.",
      },
    ],
    tags: [],
  },
  {
    id: "64",
    question:
      "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
    options: [
      {
        value: "Multi-factor authentication.",
      },
      {
        value: "Availability Zones.",
        answer: 1,
      },
      {
        value: "Elastic Load Balancing.",
        answer: 1,
      },
      {
        value: "Penetration testing.",
      },
      {
        value: "Vertical Scaling.",
      },
    ],
    tags: [],
  },
  {
    id: "65",
    question:
      "What is the AWS service that provides a virtual network dedicated to your AWS account?",
    options: [
      {
        value: "AWS VPN.",
      },
      {
        value: "AWS Subnets.",
      },
      {
        value: "AWS Dedicated Hosts.",
      },
      {
        value: "Amazon VPC.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "66",
    question:
      "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      {
        value: "Managing environmental events of AWS data centers.",
      },
      {
        value:
          "Protecting the confidentiality of data in transit in Amazon S3.",
        answer: 1,
      },
      {
        value: "Controlling physical access to AWS Regions.",
      },
      {
        value: "Ensuring that the underlying EC2 host is configured properly.",
      },
      {
        value: "Patching applications installed on Amazon EC2.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "67",
    question:
      "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
    options: [
      {
        value: "Amazon VPC.",
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "Amazon S3.",
      },
      {
        value: "Amazon EC2.",
      },
      {
        value: "AWS Lambda.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "68",
    question:
      "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: [
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon SQS.",
      },
      {
        value: "Amazon S3.",
        answer: 1,
      },
      {
        value: "Amazon Instance store.",
      },
    ],
    tags: [],
  },
  {
    id: "69",
    question:
      "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    options: [
      {
        value: "Instance Password.",
      },
      {
        value: "Key pairs.",
      },
      {
        value: "Access Keys.",
        answer: 1,
      },
      {
        value: "MFA.",
      },
    ],
    tags: [],
  },
  {
    id: "70",
    question: "What does Amazon ElastiCache provide?",
    options: [
      {
        value: "In-memory caching for read-heavy applications.",
        answer: 1,
      },
      {
        value: "An Ehcache compatible in-memory data store.",
      },
      {
        value:
          "An online software store that allows Customers to launch pre-configured software with just few clicks.",
      },
      {
        value: "A domain name system in the cloud.",
      },
    ],
    tags: [],
  },
  {
    id: "71",
    question:
      "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
    options: [
      {
        value: "AWS WAF.",
      },
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "AWS Organizations.",
        answer: 1,
      },
      {
        value: "Amazon Config.",
      },
    ],
    tags: [],
  },
  {
    id: "72",
    question:
      "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
    options: [
      {
        value: "Dedicated Instances.",
      },
      {
        value: "Dedicated Hosts.",
        answer: 1,
      },
      {
        value: "On-demand Instances.",
      },
      {
        value: "Reserved Instances.",
      },
    ],
    tags: [],
  },
  {
    id: "73",
    question:
      "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
    options: [
      {
        value: "Free support for all enterprise customers.",
      },
      {
        value: "Automatic data protection.",
      },
      {
        value: "Reduced Capital Expenditure (CapEx).",
        answer: 1,
      },
      {
        value: "AWS holds responsibility for managing customer applications.",
      },
    ],
    tags: [],
  },
  {
    id: "74",
    question:
      "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
    options: [
      {
        value:
          "Always use Global Services in your architecture rather than Regional Services.",
      },
      {
        value: "Always choose to pay as you go.",
      },
      {
        value: "Treat servers as fixed resources.",
      },
      {
        value: "Automate wherever possible.",
        answer: 1,
      },
      {
        value: "Remove single points of failure.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "75",
    question:
      "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
    options: [
      {
        value: "AWS Direct Connect.",
        answer: 1,
      },
      {
        value: "Amazon CloudFront.",
      },
      {
        value: "AWS Snowball.",
      },
      {
        value: "Amazon Route 53.",
      },
    ],
    tags: [],
  },
  {
    id: "76",
    question:
      "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
    options: [
      {
        value: "Internet gateways.",
      },
      {
        value: "Virtual Private Cloud.",
        answer: 1,
      },
      {
        value: "Security Groups.",
      },
      {
        value: "Amazon CloudFront.",
      },
    ],
    tags: [],
  },
  {
    id: "77",
    question:
      "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    options: [
      {
        value: "Amazon Cognito.",
      },
      {
        value: "AWS IAM.",
      },
      {
        value: "Amazon Aurora.",
      },
      {
        value: "AWS WAF.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "78",
    question:
      "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    options: [
      {
        value: "Amazon EMR.",
        answer: 1,
      },
      {
        value: "Amazon MQ.",
      },
      {
        value: "Amazon SNS.",
      },
      {
        value: "Amazon SQS.",
      },
    ],
    tags: [],
  },
  {
    id: "79",
    question:
      "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
    options: [
      {
        value: "Monitoring network performance.",
      },
      {
        value: "Installing software on EC2 instances.",
      },
      {
        value: "Creating hypervisors.",
        answer: 1,
      },
      {
        value: "Configuring Access Control Lists (ACLs).",
      },
      {
        value: "Hardware maintenance.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "80",
    question:
      "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
    options: [
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon EC2.",
        answer: 1,
      },
      {
        value: "Amazon RDS.",
      },
    ],
    tags: [],
  },
  {
    id: "81",
    question:
      "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
    options: [
      {
        value: "MFA.",
      },
      {
        value: "Security tokens.",
      },
      {
        value: "A user name and password.",
        answer: 1,
      },
      {
        value: "Access keys.",
      },
    ],
    tags: [],
  },
  {
    id: "82",
    question:
      "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    options: [
      {
        value: "IAM.",
      },
      {
        value: "An internet gateway.",
      },
      {
        value: "EBS Snapshot.",
      },
      {
        value: "AMI.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "83",
    question:
      "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
    options: [
      {
        value: "Reserved Compute capacity.",
      },
      {
        value: "Eliminating Single Points of Failure (SPOFs).",
      },
      {
        value: "Distributed infrastructure.",
        answer: 1,
      },
      {
        value: "Virtualized compute resources.",
      },
      {
        value: "Dedicated hosting.",
      },
    ],
    tags: [],
  },
  {
    id: "84",
    question:
      "Which of the following aspects of security are managed by AWS? (Choose TWO)",
    options: [
      {
        value: "Encryption of EBS volumes.",
      },
      {
        value: "VPC security.",
      },
      {
        value: "Access permissions.",
      },
      {
        value: "Hardware patching.",
      },
      {
        value: "Securing global physical infrastructure.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "85",
    question:
      "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    options: [
      {
        value: "The ability of a system to recover gracefully from failure.",
      },
      {
        value: "The efficient use of computing resources to meet requirements.",
      },
      {
        value:
          "The ability to monitor systems and improve supporting processes and procedures.",
        answer: 1,
      },
      {
        value: "The ability to manage datacenter operations more efficiently.",
      },
    ],
    tags: [],
  },
  {
    id: "86",
    question:
      "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    options: [
      {
        value:
          "Edge locations are used by CloudFront to cache the most recent responses.",
      },
      {
        value:
          "Edge locations are used by CloudFront to improve your end users' experience when uploading files.",
      },
      {
        value:
          "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
        answer: 1,
      },
      {
        value:
          "Edge locations are used by CloudFront to distribute content to global users with low latency.",
      },
    ],
    tags: [],
  },
  {
    id: "87",
    question:
      "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
    options: [
      {
        value: "AWS CloudTrail.",
        answer: 1,
      },
      {
        value: "Amazon Comprehend.",
      },
      {
        value: "AWS Transit Gateway.",
      },
      {
        value: "AWS X-Ray.",
      },
      {
        value: "AWS Config.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "88",
    question:
      "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
    options: [
      {
        value: "Amazon ECS.",
        answer: 1,
      },
      {
        value: "AWS Data Pipeline.",
      },
      {
        value: "AWS Cloud9.",
      },
      {
        value: "AWS Personal Health Dashboard.",
      },
    ],
    tags: [],
  },
  {
    id: "89",
    question:
      "Which of the following services will help businesses ensure compliance in AWS?",
    options: [
      {
        value: "CloudFront.",
      },
      {
        value: "CloudEndure Migration.",
      },
      {
        value: "CloudWatch.",
      },
      {
        value: "CloudTrail.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "90",
    question:
      "Which of the following procedures will help reduce your Amazon S3 costs?",
    options: [
      {
        value:
          "Use the Import/Export feature to move old files automatically to Amazon Glacier.",
      },
      {
        value:
          "Use the right combination of storage classes based on different use cases.",
        answer: 1,
      },
      {
        value: "Pick the right Availability Zone for your S3 bucket.",
      },
      {
        value: "Move all the data stored in S3 standard to EBS.",
      },
    ],
    tags: [],
  },
  {
    id: "91",
    question:
      "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
    options: [
      {
        value: "AWS Direct Connect.",
      },
      {
        value: "Amazon EC2 Auto Scaling.",
        answer: 1,
      },
      {
        value: "Elastic Load Balancer.",
        answer: 1,
      },
      {
        value: "CloudFormation.",
      },
      {
        value: "Network ACLs.",
      },
    ],
    tags: [],
  },
  {
    id: "92",
    question:
      "Which of the following activities may help reduce your AWS monthly costs?",
    options: [
      {
        value: "Enabling Amazon EC2 Auto Scaling for all of your workloads.",
        answer: 1,
      },
      {
        value:
          "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
      },
      {
        value: "Removing all of your Cost Allocation Tags.",
      },
      {
        value:
          "Deploying your AWS resources across multiple Availability Zones.",
      },
    ],
    tags: [],
  },
  {
    id: "93",
    question:
      "What is the AWS service/feature that takes advantage of Amazon CloudFront's globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    options: [
      {
        value: "S3 Transfer Acceleration.",
        answer: 1,
      },
      {
        value: "AWS WAF.",
      },
      {
        value: "AWS Snowmobile.",
      },
      {
        value: "AWS Snowball.",
      },
    ],
    tags: [],
  },
  {
    id: "94",
    question:
      "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    options: [
      {
        value: "AWS X-Ray.",
      },
      {
        value: "Network ACL.",
      },
      {
        value: "Security Groups.",
        answer: 1,
      },
      {
        value: "VPC Flow logs.",
      },
    ],
    tags: [],
  },
  {
    id: "95",
    question:
      "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
    options: [
      {
        value: "AWS KMS.",
      },
      {
        value: "AWS Global accelerator.",
        answer: 1,
      },
      {
        value: "AWS Direct Connect.",
      },
      {
        value: "AWS Glue.",
      },
      {
        value: "Amazon CloudFront.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "96",
    question:
      "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
    options: [
      {
        value: "Building the relational database schema.",
        answer: 1,
      },
      {
        value: "Performing backups.",
      },
      {
        value: "Managing the database settings.",
        answer: 1,
      },
      {
        value: "Patching the database software.",
      },
      {
        value: "Installing the database software.",
      },
    ],
    tags: [],
  },
  {
    id: "97",
    question:
      "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
    options: [
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon SNS.",
      },
      {
        value: "Amazon RDS.",
        answer: 1,
      },
      {
        value: "Amazon ElastiCache.",
      },
    ],
    tags: [],
  },
  {
    id: "98",
    question:
      "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
    options: [
      {
        value: "APN Consulting Partners.",
      },
      {
        value: "AWS TAM.",
      },
      {
        value: "APN Technology Partners.",
        answer: 1,
      },
      {
        value: "AWS Professional Services.",
      },
    ],
    tags: [],
  },
  {
    id: "99",
    question:
      "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
    options: [
      {
        value: "Amazon LightSail.",
      },
      {
        value: "AWS Lambda.",
        answer: 1,
      },
      {
        value: "Amazon RDS instances.",
      },
      {
        value: "Amazon EC2 instances.",
      },
    ],
    tags: [],
  },
  {
    id: "100",
    question:
      "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
    options: [
      {
        value: "She has properly built an elastic system.",
      },
      {
        value: "She has properly built a fault tolerant system.",
        answer: 1,
      },
      {
        value: "She has properly built an encrypted system.",
      },
      {
        value: "She has properly built a scalable system.",
      },
    ],
    tags: [],
  },
  {
    id: "101",
    question: "Where can you store files in AWS? (Choose TWO)",
    options: [
      {
        value: "Amazon EFS.",
        answer: 1,
      },
      {
        value: "Amazon SNS.",
      },
      {
        value: "Amazon EBS.",
        answer: 1,
      },
      {
        value: "Amazon ECS.",
      },
      {
        value: "Amazon EMR.",
      },
    ],
    tags: [],
  },
  {
    id: "102",
    question:
      "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
    options: [
      {
        value: "Amazon Simple Queue Service.",
        answer: 1,
      },
      {
        value: "AWS Storage Gateway.",
      },
      {
        value: "Amazon Simple Email Service.",
      },
      {
        value: "Amazon Simple Storage Service.",
      },
    ],
    tags: [],
  },
  {
    id: "103",
    question:
      "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
    options: [
      {
        value: "Pay less as AWS grows.",
      },
      {
        value: "Pay as you go.",
      },
      {
        value: "Pay less by using more.",
      },
      {
        value: "Save when you reserve.",
        answer: 1,
      },
    ],
    tags: ["pricing models"],
  },
  {
    id: "104",
    question:
      "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
    options: [
      {
        value: "Right-size before and after migration.",
        answer: 1,
      },
      {
        value: "Use a Multi-Region Active-Passive architecture.",
      },
      {
        value: "Combine On-demand Capacity Reservations with Saving Plans.",
      },
      {
        value: "Use a Multi-Region Active-Active architecture.",
      },
    ],
    tags: [],
  },
  {
    id: "105",
    question:
      "What is the primary storage service used by Amazon RDS database instances?",
    options: [
      {
        value: "Amazon Glacier.",
      },
      {
        value: "Amazon EBS.",
        answer: 1,
      },
      {
        value: "Amazon EFS.",
      },
      {
        value: "Amazon S3.",
      },
    ],
    tags: [],
  },
  {
    id: "106",
    question:
      "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
    options: [
      {
        value: "AWS CodePipeline.",
      },
      {
        value: "AWS X-Ray.",
        answer: 1,
      },
      {
        value: "Amazon Inspector.",
      },
      {
        value: "AWS CloudTrail.",
      },
    ],
    tags: [],
  },
  {
    id: "107",
    question:
      "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
    options: [
      {
        value: "Amazon Redshift.",
      },
      {
        value: "AWS Snowball.",
      },
      {
        value: "Amazon Simple Storage Service.",
        answer: 1,
      },
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon DynamoDB.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "108",
    question:
      "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
    options: [
      {
        value: "AWS Regions.",
      },
      {
        value: "Multi-AZ Deployment.",
        answer: 1,
      },
      {
        value: "Automatic patching.",
      },
      {
        value: "Read Replicas.",
        answer: 1,
      },
      {
        value: "Edge Locations.",
      },
    ],
    tags: [],
  },
  {
    id: "109",
    question:
      "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application's traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
    options: [
      {
        value:
          "Replicate the current resources across multiple Availability Zones within the same region.",
      },
      {
        value: "Migrate the application to a hosting provider in Asia.",
      },
      {
        value: "Recreate the website content.",
      },
      {
        value:
          "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "110",
    question:
      "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
    options: [
      {
        value: "AWS Identity and Access Management.",
        answer: 1,
      },
      {
        value: "Amazon RDS.",
      },
      {
        value: "Network Access Control Lists.",
      },
      {
        value: "Amazon EMR.",
      },
    ],
    tags: [],
  },
  {
    id: "111",
    question:
      "Using Amazon EC2 falls under which of the following cloud computing models?",
    options: [
      {
        value: "Iaas & SaaS.",
      },
      {
        value: "IaaS.",
        answer: 1,
      },
      {
        value: "SaaS.",
      },
      {
        value: "PaaS.",
      },
    ],
    tags: [],
  },
  {
    id: "112",
    question:
      "Which of the below is a best-practice when building applications on AWS?",
    options: [
      {
        value:
          "Strengthen physical security by applying the principle of least privilege.",
      },
      {
        value:
          "Ensure that the application runs on hardware from trusted vendors.",
      },
      {
        value: "Use IAM policies to maintain performance.",
      },
      {
        value:
          "Decouple the components of the application so that they run independently.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "113",
    question:
      "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: [
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon SQS.",
      },
      {
        value: "Amazon Instance store.",
      },
      {
        value: "Amazon S3.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "114",
    question:
      "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
    options: [
      {
        value: "Active archives.",
        answer: 1,
      },
      {
        value: "Dynamic websites' assets.",
      },
      {
        value: "Long-term analytic data.",
        answer: 1,
      },
      {
        value: "Active databases.",
      },
      {
        value: "Cached data.",
      },
    ],
    tags: [],
  },
  {
    id: "115",
    question: "What does Amazon Elastic Beanstalk provide?",
    options: [
      {
        value: "A PaaS solution to automate application deployment.",
      },
      {
        value: "A compute engine for Amazon ECS.",
        answer: 1,
      },
      {
        value:
          "A scalable file storage solution for use with AWS and on-premises servers.",
      },
      {
        value: "A NoSQL database service.",
      },
    ],
    tags: [],
  },
  {
    id: "116",
    question:
      "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
    options: [
      {
        value: "Amazon Kinesis.",
      },
      {
        value: "Security groups.",
      },
      {
        value: "Amazon Inspector.",
        answer: 1,
      },
      {
        value: "AWS Network Access Control Lists.",
      },
    ],
    tags: [],
  },
  {
    id: "117",
    question:
      "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
    options: [
      {
        value: "Patch management controls.",
      },
      {
        value: "Database controls.",
      },
      {
        value: "Awareness & Training.",
      },
      {
        value: "Environmental controls.",
      },
      {
        value: "Physical controls.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "118",
    question:
      "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
    options: [
      {
        value: "Reserved instances - No Upfront.",
      },
      {
        value: "Reserved instances - Partial Upfront.",
        answer: 1,
      },
      {
        value: "On-Demand instances.",
      },
      {
        value: "Spot Instances.",
      },
    ],
    tags: [],
  },
  {
    id: "119",
    question:
      "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users' experience?",
    options: [
      {
        value: "Elasticity.",
      },
      {
        value: "Global reach.",
        answer: 1,
      },
      {
        value: "Data durability.",
      },
      {
        value: "High availability.",
      },
    ],
    tags: [],
  },
  {
    id: "120",
    question:
      "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
    options: [
      {
        value: "AWS Batch.",
      },
      {
        value: "AWS Outposts.",
      },
      {
        value: "Amazon Lightsail.",
      },
      {
        value: "Amazon EC2.",
      },
      {
        value: "AWS Lambda.",
        answer: 1,
      },
    ],
    tags: ["Savings Plans"],
  },
  {
    id: "121",
    question:
      "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
    options: [
      {
        value:
          "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
      },
      {
        value:
          "Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
      },
      {
        value:
          "Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
      },
      {
        value:
          "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "122",
    question:
      "Which statement is correct with regards to AWS service limits? (Choose TWO)",
    options: [
      {
        value: "You can contact AWS support to increase the service limits.",
        answer: 1,
      },
      {
        value: "Each IAM user has the same service limit.",
      },
      {
        value: "There are no service limits on AWS.",
      },
      {
        value:
          "You can use the AWS Trusted Advisor to monitor your service limits.",
        answer: 1,
      },
      {
        value:
          "The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.",
      },
    ],
    tags: [],
  },
  {
    id: "123",
    question:
      "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
    options: [
      {
        value: "AWS Console.",
      },
      {
        value: "AWS Service Catalog.",
      },
      {
        value: "AWS OpsWorks.",
      },
      {
        value: "AWS CLI.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "124",
    question:
      "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
    options: [
      {
        value: "AWS Artifact.",
      },
      {
        value: "AWS Cloud9.",
      },
      {
        value: "AWS Direct Connect.",
        answer: 1,
      },
      {
        value: "AWS CloudTrail.",
      },
      {
        value: "AWS VPN.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "125",
    question:
      "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
    options: [
      {
        value: "AWS EC2 Auto Recovery.",
      },
      {
        value: "AWS Auto Scaling.",
      },
      {
        value: "AWS Network Load Balancer.",
      },
      {
        value: "AWS Application Load Balancer.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "126",
    question:
      "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
    options: [
      {
        value: "Amazon Neptune.",
      },
      {
        value: "Amazon Aurora.",
        answer: 1,
      },
      {
        value: "Amazon RDS for SQL Server.",
      },
      {
        value: "Amazon RDS for PostgreSQL.",
      },
    ],
    tags: [],
  },
  {
    id: "127",
    question:
      "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
    options: [
      {
        value: "AWS CloudHSM.",
      },
      {
        value: "Security Groups.",
        answer: 1,
      },
      {
        value: "AWS Batch.",
      },
      {
        value: "AWS IAM.",
      },
      {
        value: "Network Access Control Lists (Network ACLs).",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "128",
    question:
      "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
    options: [
      {
        value: "Amazon Redshift.",
        answer: 1,
      },
      {
        value: "Amazon Kinesis.",
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: " Amazon RDS.",
      },
    ],
    tags: [],
  },
  {
    id: "129",
    question:
      "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
    options: [
      {
        value: "Application development.",
      },
      {
        value: "Market research.",
      },
      {
        value: "Business analysis.",
      },
      {
        value: "Physical hardware.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "130",
    question: "How are AWS customers billed for Linux-based Amazon EC2 usage?",
    options: [
      {
        value:
          "EC2 instances will be billed on one second increments, with a minimum of one minute.",
        answer: 1,
      },
      {
        value:
          "EC2 instances will be billed on one hour increments, with a minimum of one day.",
      },
      {
        value:
          "EC2 instances will be billed on one minute increments, with a minimum of one hour.",
      },
      {
        value:
          "EC2 instances will be billed on one day increments, with a minimum of one month.",
      },
    ],
    tags: [],
  },
  {
    id: "131",
    question:
      "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
    options: [
      {
        value: "Instance type.",
        answer: 1,
      },
      {
        value: "The Availability Zone where the instance is provisioned.",
      },
      {
        value: "Load balancing.",
        answer: 1,
      },
      {
        value: "Number of buckets.",
      },
      {
        value: "Number of private IPs.",
      },
    ],
    tags: [],
  },
  {
    id: "132",
    question:
      "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
    options: [
      {
        value:
          "By creating an AWS Config template from the old instance and launching a new instance from it.",
      },
      {
        value: "By creating an EBS Snapshot of the old instance.",
      },
      {
        value:
          "By installing Aurora on EC2 and launching a new instance from it.",
      },
      {
        value:
          "By creating an AMI from the old instance and (Correct) launching a new instance from it.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "133",
    question:
      "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
    options: [
      {
        value: "IAM Principals.",
      },
      {
        value: "AWS Service Control Policies (SCPs).",
        answer: 1,
      },
      {
        value: "IAM policies.",
      },
      {
        value: "AWS Fargate.",
      },
    ],
    tags: [
      "AWS Organization",
      "AWS Service Control Policies (SCPs)",
      "AWS billing",
    ],
  },
  {
    id: "134",
    question:
      "Which of the following statements describes the AWS Cloud's agility?",
    options: [
      {
        value:
          "AWS allows you to host your applications in multiple regions around the world.",
      },
      {
        value:
          "AWS provides customizable hardware at the lowest possible cost.",
      },
      {
        value: "AWS allows you to provision resources in minutes.",
        answer: 1,
      },
      {
        value: "AWS allows you to pay upfront to reduce costs.",
      },
    ],
    tags: [],
  },
  {
    id: "135",
    question:
      "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
    options: [
      {
        value: "Lower administrative burden.",
        answer: 1,
      },
      {
        value: "Complete control over the underlying host.",
      },
      {
        value: "Resizable compute capacity.",
        answer: 1,
      },
      {
        value: "Scales automatically to larger or smaller instance types.",
      },
      {
        value: "Supports the document and key-value data structure.",
      },
    ],
    tags: [],
  },
  {
    id: "136",
    question:
      "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
    options: [
      {
        value: "Internet Gateway.",
      },
      {
        value: "AWS IQ.",
      },
      {
        value: "AWS Direct Connect.",
      },
      {
        value: "AWS Site-to-Site VPN.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "137",
    question:
      "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
    options: [
      {
        value: "Enterprise Support.",
      },
      {
        value: "Developer Support.",
      },
      {
        value: "Basic Support.",
      },
      {
        value: "Business Support.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "138",
    question:
      "Which of the following is used to control network traffic in AWS? (Choose TWO)",
    options: [
      {
        value: "Network Access Control Lists (NACLs).",
        answer: 1,
      },
      {
        value: "Key Pairs.",
      },
      {
        value: "Access Keys.",
      },
      {
        value: "IAM Policies.",
      },
      {
        value: "Security Groups.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "139",
    question:
      "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
    options: [
      {
        value: "Reserved instances.",
      },
      {
        value: "Spot Instances.",
        answer: 1,
      },
      {
        value: "On-Demand instances.",
      },
      {
        value: "Dedicated instances.",
      },
    ],
    tags: [],
  },
  {
    id: "140",
    question:
      "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
    options: [
      {
        value: "AWS Service Health Dashboard.",
        answer: 1,
      },
      {
        value: "AWS Management Console.",
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "AWS Personal Health Dashboard.",
      },
    ],
    tags: [],
  },
  {
    id: "141",
    question:
      "Which AWS service or feature can be used to call AWS Services from different programming languages?",
    options: [
      {
        value: "AWS Software Development Kit.",
        answer: 1,
      },
      {
        value: "AWS Command Line Interface.",
      },
      {
        value: "AWS CodeDeploy.",
      },
      {
        value: "AWS Management Console.",
      },
    ],
    tags: [],
  },
  {
    id: "142",
    question: "Which AWS Service can be used to register a new domain name?",
    options: [
      {
        value: "Amazon Personalize.",
      },
      {
        value: "Amazon Route 53.",
        answer: 1,
      },
      {
        value: "AWS KMS.",
      },
      {
        value: "AWS Config.",
      },
    ],
    tags: [],
  },
  {
    id: "143",
    question:
      "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
    options: [
      {
        value: "AWS CloudFormation.",
        answer: 1,
      },
      {
        value: "AWS Migration Hub.",
      },
      {
        value: "AWS IAM.",
      },
      {
        value: "AWS Elastic Beanstalk.",
        answer: 1,
      },
      {
        value: "Amazon Macie.",
      },
    ],
    tags: [],
  },
  {
    id: "144",
    question: "Which AWS service provides cost-optimization recommendations?",
    options: [
      {
        value: "AWS Trusted Advisor.",
        answer: 1,
      },
      {
        value: "AWS Pricing Calculator.",
      },
      {
        value: "Amazon QuickSight.",
      },
      {
        value: "AWS X-Ray.",
      },
    ],
    tags: [],
  },
  {
    id: "145",
    question:
      "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
    options: [
      {
        value: "VPC Peering.",
      },
      {
        value: "AWS Transit Gateway.",
        answer: 1,
      },
      {
        value: "Amazon Connect.",
      },
      {
        value: "Security Groups.",
      },
    ],
    tags: [],
  },
  {
    id: "146",
    question:
      "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
    options: [
      {
        value:
          "Instances can be shut down by AWS at any time with no notification.",
      },
      {
        value:
          "Reserved instances require at least a one-year pricing commitment.",
        answer: 1,
      },
      {
        value: "There is no additional charge for using dedicated instances.",
      },
      {
        value:
          "Reserved instances provide a significant discount compared to on-demand instances.",
        answer: 1,
      },
      {
        value: "Reserved instances are best suited for periodic workloads.",
      },
    ],
    tags: [],
  },
  {
    id: "147",
    question: "Why does every AWS Region contain multiple Availability Zones?",
    options: [
      {
        value:
          "Multiple Availability Zones allows you to build resilient and highly available architectures.",
        answer: 1,
      },
      {
        value:
          "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
      },
      {
        value:
          "Multiple Availability Zones allows for data replication and global reach.",
      },
      {
        value:
          "Multiple Availability Zones within a region increases the storage capacity available in that region.",
      },
    ],
    tags: [],
  },
  {
    id: "148",
    question:
      "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
    options: [
      {
        value: "On-Demand Instances.",
        answer: 1,
      },
      {
        value: "Spot Instances.",
      },
      {
        value: "Reserved Instances - All Upfront.",
      },
      {
        value: "Reserved Instances - No Upfront.",
      },
    ],
    tags: [],
  },
  {
    id: "149",
    question:
      "Which of the following is a benefit of running an application in multiple Availability Zones?",
    options: [
      {
        value: "Allows you to exceed AWS service limits.",
      },
      {
        value:
          "Reduces application response time between servers and global users.",
      },
      {
        value: "Increases available compute capacity.",
      },
      {
        value: "Increases the availability of your application.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "150",
    question:
      "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
    options: [
      {
        value: "AWS sells the old devices to other hosting providers.",
      },
      {
        value:
          "AWS destroys the old devices in accordance with industry-standard practices.",
        answer: 1,
      },
      {
        value: "AWS sends the old devices for remanufacturing.",
      },
      {
        value: "AWS stores the old devices in a secure place.",
      },
    ],
    tags: [],
  },
  {
    id: "151",
    question:
      "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
    options: [
      {
        value: "Amazon Route 53.",
      },
      {
        value: "AWS ACM.",
        answer: 1,
      },
      {
        value: "AWS Directory Service.",
      },
      {
        value: "AWS Identity & Access Management.",
        answer: 1,
      },
      {
        value: "AWS Data Pipeline.",
      },
    ],
    tags: [],
  },
  {
    id: "152",
    question:
      "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
    options: [
      {
        value: "Amazon EC2.",
      },
      {
        value: "Amazon S3.",
      },
      {
        value: "AWS Lambda.",
        answer: 1,
      },
      {
        value: "Amazon EMR.",
      },
      {
        value: "Amazon EBS.",
      },
    ],
    tags: [],
  },
  {
    id: "153",
    question:
      "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
    options: [
      {
        value: "Application management.",
      },
      {
        value: "Capacity management.",
        answer: 1,
      },
      {
        value: "Access control.",
      },
      {
        value: "Operating system maintenance.",
        answer: 1,
      },
      {
        value: "Data management.",
      },
    ],
    tags: [],
  },
  {
    id: "154",
    question: "How do ELBs improve the reliability of your application?",
    options: [
      {
        value: "By distributing traffic across multiple S3 buckets.",
      },
      {
        value: "By replicating data to multiple availability zones.",
      },
      {
        value: "By creating database Read Replicas.",
      },
      {
        value: "By ensuring that only healthy targets receive traffic.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "155",
    question:
      "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
    options: [
      {
        value: "On-demand instances.",
      },
      {
        value: "Spot instances.",
      },
      {
        value: "Dedicated instances.",
        answer: 1,
      },
      {
        value: "Reserved instances.",
      },
    ],
    tags: [],
  },
  {
    id: "156",
    question:
      "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
    options: [
      {
        value: "Snowball.",
      },
      {
        value: "S3 Transfer Acceleration.",
        answer: 1,
      },
      {
        value: "Snowmobile.",
      },
      {
        value: "Amazon VPC.",
      },
    ],
    tags: [],
  },
  {
    id: "157",
    question:
      "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
    options: [
      {
        value: "Amazon S3 Glacier.",
        answer: 1,
      },
      {
        value: "Amazon EFS.",
      },
      {
        value: "Amazon S3 Standard.",
      },
      {
        value: "Amazon EBS.",
      },
    ],
    tags: [],
  },
  {
    id: "158",
    question: "Which AWS Service is used to manage user permissions?",
    options: [
      {
        value: "Security Groups.",
      },
      {
        value: "Amazon ECS.",
      },
      {
        value: "AWS IAM.",
        answer: 1,
      },
      {
        value: "AWS Support.",
      },
    ],
    tags: [],
  },
  {
    id: "159",
    question: "Which support plan includes AWS Support Concierge Service?",
    options: [
      {
        value: "Premium Support.",
      },
      {
        value: "Business Support.",
      },
      {
        value: "Enterprise Support.",
        answer: 1,
      },
      {
        value: "Standard Support.",
      },
    ],
    tags: [],
  },
  {
    id: "160",
    question:
      "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
    options: [
      {
        value: "AWS Config.",
      },
      {
        value: "Amazon CloudWatch.",
        answer: 1,
      },
      {
        value: "AWS CloudTrail.",
      },
      {
        value: "AWS CloudFormation.",
      },
    ],
    tags: [],
  },
  {
    id: "161",
    question:
      "What are the benefits of using an AWS-managed service? (Choose TWO)",
    options: [
      {
        value: "Provides complete control over the virtual infrastructure.",
      },
      {
        value: "Allows customers to deliver new solutions faster.",
      },
      {
        value: "Lowers operational complexity.",
        answer: 1,
      },
      {
        value: "Eliminates the need to encrypt data.",
      },
      {
        value: "Allows developers to control all patching related activities.",
      },
    ],
    tags: [],
  },
  {
    id: "162",
    question:
      "Which of the following are use cases for Amazon S3? (Choose TWO)",
    options: [
      {
        value: "Hosting static websites.",
        answer: 1,
      },
      {
        value: "Hosting websites that require sustained high CPU utilization.",
      },
      {
        value: "Cost-effective database and log storage.",
      },
      {
        value: "A media store for the CloudFront service.",
        answer: 1,
      },
      {
        value: "Processing data streams at any scale.",
      },
    ],
    tags: [],
  },
  {
    id: "163",
    question: "What is the AWS' recommendation regarding access keys?",
    options: [
      {
        value: "Delete all access keys and use passwords instead.",
      },
      {
        value: "Only share them with trusted people.",
      },
      {
        value: "Rotate them regularly.",
        answer: 1,
      },
      {
        value: "Save them within your application code.",
      },
    ],
    tags: [],
  },
  {
    id: "164",
    question:
      "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
    options: [
      {
        value: "Key Pair.",
      },
      {
        value: "Access Keys.",
      },
      {
        value: "SDK.",
      },
      {
        value: "MFA.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "165",
    question: "What is the benefit of using an API to access AWS Services?",
    options: [
      {
        value: "It improves the performance of AWS resources.",
      },
      {
        value: "It reduces the time needed to provision AWS resources.",
      },
      {
        value: "It reduces the number of developers necessary.",
      },
      {
        value: "It allows for programmatic management of AWS resources.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "166",
    question:
      "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
    options: [
      {
        value: "AWS Storage Gateway.",
      },
      {
        value: "Amazon S3.",
      },
      {
        value: "Amazon EBS.",
        answer: 1,
      },
      {
        value: "Amazon Glacier.",
      },
    ],
    tags: [],
  },
  {
    id: "167",
    question:
      "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
    options: [
      {
        value:
          "Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
      },
      {
        value:
          "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
      },
      {
        value:
          "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
        answer: 1,
      },
      {
        value:
          "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill.",
      },
    ],
    tags: [],
  },
  {
    id: "168",
    question:
      "What is the AWS service that provides five times the performance of a standard MySQL database?",
    options: [
      {
        value: "Amazon Aurora.",
        answer: 1,
      },
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon Neptune.",
      },
    ],
    tags: [],
  },
  {
    id: "169",
    question: "What does AWS Service Catalog provide?",
    options: [
      {
        value:
          "It enables customers to quickly find descriptions and use cases for AWS services.",
      },
      {
        value:
          "It enables customers to explore the different catalogs of AWS services.",
      },
      {
        value:
          "It simplifies organizing and governing commonly deployed IT services.",
        answer: 1,
      },
      {
        value:
          "It allows developers to deploy infrastructure on AWS using familiar programming languages.",
      },
    ],
    tags: [],
  },
  {
    id: "170",
    question:
      "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
    options: [
      {
        value: "Protecting credentials.",
      },
      {
        value: "Logging access activity.",
      },
      {
        value: "Patching the database software.",
      },
      {
        value: "Operating system maintenance.",
        answer: 1,
      },
      {
        value: "Creating access policies.",
      },
    ],
    tags: [],
  },
  {
    id: "171",
    question:
      "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
    options: [
      {
        value: "AWS Snowball Migration Service.",
      },
      {
        value: "AWS Application Discovery Service.",
        answer: 1,
      },
      {
        value: "AWS DMS.",
      },
      {
        value: "AWS Migration Hub.",
      },
    ],
    tags: [],
  },
  {
    id: "172",
    question:
      "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
    options: [
      {
        value: "Amazon Machine Image.",
      },
      {
        value: "AWS Cost Explorer.",
      },
      {
        value: "AWS Cost & Usage Report.",
        answer: 1,
      },
      {
        value: "Amazon CloudWatch.",
      },
    ],
    tags: [],
  },
  {
    id: "173",
    question: "Which statement best describes the concept of an AWS region?",
    options: [
      {
        value:
          "An AWS Region is a geographical location with a collection of Edge locations.",
      },
      {
        value:
          "An AWS Region is a virtual network dedicated only to a single AWS customer.",
      },
      {
        value:
          "An AWS Region is a geographical location with a collection of Availability Zones.",
        answer: 1,
      },
      {
        value:
          "An AWS Region represents the country where the AWS infrastructure exist.",
      },
    ],
    tags: [],
  },
  {
    id: "174",
    question:
      "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
    options: [
      {
        value: "SNS logs.",
      },
      {
        value: "SQS logs.",
      },
      {
        value: "CloudWatch Logs.",
      },
      {
        value: "CloudTrail logs.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "175",
    question:
      "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
    options: [
      {
        value: "Availability Zones.",
      },
      {
        value: "Data sovereignty.",
      },
      {
        value: "The number of reads and writes per second.",
      },
      {
        value: "The nature of the queries.",
        answer: 1,
      },
      {
        value: "Software bugs.",
      },
    ],
    tags: [],
  },
  {
    id: "176",
    question:
      "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
    options: [
      {
        value: "Quickly identify resources that belong to a specific project.",
        answer: 1,
      },
      {
        value: "Quickly identify software solutions on AWS.",
      },
      {
        value: "Track API calls in your AWS account.",
      },
      {
        value: "Quickly identify deleted resources and their metadata.",
      },
      {
        value: "Track AWS spending across multiple resources.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "177",
    question: "What are AWS shared controls?",
    options: [
      {
        value:
          "Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
      },
      {
        value: "Controls that a customer inherits from AWS.",
      },
      {
        value:
          "Controls that apply to both the infrastructure layer and customer layers.",
        answer: 1,
      },
      {
        value:
          "Controls that the customer and AWS collaborate together upon to secure the infrastructure.",
      },
    ],
    tags: [],
  },
  {
    id: "178",
    question:
      "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
    options: [
      {
        value:
          "Build multi-region architectures to better serve global customers.",
        answer: 1,
      },
      {
        value: "Apply security at all layers.",
      },
      {
        value: "Implement strong Identity and Access controls.",
      },
      {
        value: "Use serverless architectures.",
        answer: 1,
      },
      {
        value: "Enable audit logging.",
      },
    ],
    tags: [],
  },
  {
    id: "179",
    question:
      "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
    options: [
      {
        value: "Protecting sensitive data.",
        answer: 1,
      },
      {
        value: "Patching of the underlying infrastructure.",
      },
      {
        value: "Setup and operation of managed databases.",
      },
      {
        value: "Maintaining consistent hardware components.",
      },
      {
        value: "Installing and configuring third-party software.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "180",
    question:
      "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
    options: [
      {
        value: "Free commercial software licenses.",
      },
      {
        value: "Free technical support.",
      },
      {
        value: "Elastic resources.",
        answer: 1,
      },
      {
        value: "On-site visits for auditing.",
      },
      {
        value: "Cost Savings.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "181",
    question:
      "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
    options: [
      {
        value: "Amazon Inspector.",
        answer: 1,
      },
      {
        value: "AWS Virtual Private Gateway.",
      },
      {
        value: "AWS Batch.",
      },
      {
        value: "Amazon ECS.",
      },
      {
        value: "AWS Config.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "182",
    question:
      "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
    options: [
      {
        value: "Amazon EC2 is considered a Serverless Web Service.",
      },
      {
        value: "Amazon EC2 eliminates the need to invest in hardware upfront.",
        answer: 1,
      },
      {
        value:
          "Amazon EC2 can launch as many or as few virtual servers as needed.",
      },
      {
        value: "Amazon EC2 offers scalable computing.",
      },
    ],
    tags: [],
  },
  {
    id: "183",
    question:
      "What is the AWS Compute service that executes code only when triggered by events?",
    options: [
      {
        value: "AWS Lambda.",
        answer: 1,
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "AWS Transit Gateway.",
      },
      {
        value: "Amazon EC2.",
      },
    ],
    tags: [],
  },
  {
    id: "184",
    question:
      "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers' requirements. What is the name of these virtual servers in AWS?",
    options: [
      {
        value: "Amazon EBS Snapshots.",
      },
      {
        value: "Amazon VPC.",
        answer: 1,
      },
      {
        value: "AWS Managed Servers.",
      },
      {
        value: "Amazon EC2 Instances.",
      },
    ],
    tags: [],
  },
  {
    id: "185",
    question:
      "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
    options: [
      {
        value: "AWS Secrets Manager.",
      },
      {
        value: "AWS WAF.",
      },
      {
        value: "AWS CAF.",
        answer: 1,
      },
      {
        value: "Amazon EFS.",
      },
    ],
    tags: [],
  },
  {
    id: "186",
    question:
      "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
    options: [
      {
        value: "AWS Cost Explorer.",
      },
      {
        value: "AWS TCO Calculator.",
        answer: 1,
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Pricing Calculator.",
      },
    ],
    tags: [],
  },
  {
    id: "187",
    question:
      "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
    options: [
      {
        value: "Using AWS Trusted Advisor to find underutilized resources.",
      },
      {
        value: "Using AWS CloudTrail to record user activities.",
      },
      {
        value: "Using AWS CloudFormation to manage infrastructure as code.",
        answer: 1,
      },
      {
        value: "Deploying an application in multiple Availability Zones.",
      },
    ],
    tags: [],
  },
  {
    id: "188",
    question:
      "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
    options: [
      {
        value: "AWS allows them to pay later when their business succeed.",
      },
      {
        value:
          "AWS can build complete data centers faster than any other Cloud provider.",
        answer: 1,
      },
      {
        value:
          "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
      },
      {
        value: "AWS removes the need to invest in operational expenditure.",
      },
      {
        value:
          "Using AWS allows companies to replace large capital expenditure with low variable costs.",
      },
    ],
    tags: [],
  },
  {
    id: "189",
    question: "What are the benefits of using DynamoDB? (Choose TWO)",
    options: [
      {
        value: "Automatically scales to meet required throughput capacity.",
        answer: 1,
      },
      {
        value: "Provides resizable instances to match the current demand.",
      },
      {
        value: "Supports both relational and non-relational data models.",
      },
      {
        value: "Offers extremely low (single-digit millisecond) latency.",
        answer: 1,
      },
      {
        value:
          "Supports the most popular NoSQL database engines such as CouchDB and MongoDB.",
      },
    ],
    tags: [],
  },
  {
    id: "190",
    question:
      "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
    options: [
      {
        value: "Versioning.",
        answer: 1,
      },
      {
        value: "Deduplication.",
      },
      {
        value: "Permissions.",
        answer: 1,
      },
      {
        value: "Decryption.",
      },
      {
        value: "Conversion.",
      },
    ],
    tags: [],
  },
  {
    id: "191",
    question:
      "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
    options: [
      {
        value: "AWS Partners.",
        answer: 1,
      },
      {
        value: "AWS Artifact.",
      },
      {
        value: "AWS Professional Services.",
        answer: 1,
      },
      {
        value: "Amazon Athena.",
      },
      {
        value: "Amazon PinPoint.",
      },
    ],
    tags: [],
  },
  {
    id: "192",
    question:
      "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
    options: [
      {
        value: "Deleting unused EBS volumes after terminating an EC2instance.",
      },
      {
        value: "Deleting unused AutoScaling launch (Correct) configuration.",
        answer: 1,
      },
      {
        value: "Deleting unused Elastic Load Balancers.",
      },
      {
        value: "Releasing unused Elastic IPs after terminating an EC2instance.",
      },
    ],
    tags: [],
  },
  {
    id: "193",
    question:
      "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
    options: [
      {
        value: "AWS Cost Explorer.",
      },
      {
        value: "AWS Pricing Calculator.",
        answer: 1,
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Consolidated Billing.",
      },
    ],
    tags: [],
  },
  {
    id: "194",
    question:
      "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
    options: [
      {
        value: "Running penetration tests.",
      },
      {
        value: "Reserving capacity.",
      },
      {
        value: "Data center operations.",
        answer: 1,
      },
      {
        value: "Auditing and regulatory compliance.",
      },
      {
        value: "Infrastructure security.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "195",
    question:
      "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
    options: [
      {
        value: "Amazon Simple Email Service (Amazon SES).",
      },
      {
        value: "Amazon Simple Storage Service (Amazon S3).",
      },
      {
        value: "Amazon Simple Notification Service (Amazon SNS).",
        answer: 1,
      },
      {
        value: "Amazon Simple Queue Service (Amazon SQS).",
      },
    ],
    tags: [],
  },
  {
    id: "196",
    question:
      "Which of the following allows you to create new RDS instances? (Choose TWO)",
    options: [
      {
        value: "AWS CodeDeploy.",
      },
      {
        value: "AWS Quick Starts.",
      },
      {
        value: "AWS CloudFormation.",
        answer: 1,
      },
      {
        value: "AWS DMS.",
      },
      {
        value: "AWS Management Console.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "197",
    question:
      "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
    options: [
      {
        value: "Low monthly instance maintenance costs.",
      },
      {
        value: "Low-cost instance tagging.",
      },
      {
        value: "Per-second instance billing.",
        answer: 1,
      },
      {
        value: "Low instance start-up fees.",
      },
    ],
    tags: [],
  },
  {
    id: "198",
    question:
      "Which AWS Group assists customers in achieving their desired business outcomes?",
    options: [
      {
        value: "AWS Security Team.",
      },
      {
        value: "AWS Professional Services.",
        answer: 1,
      },
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "AWS Concierge Support Team.",
      },
    ],
    tags: [],
  },
  {
    id: "199",
    question:
      "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
    options: [
      {
        value: "AWS KMS.",
        answer: 1,
      },
      {
        value: "AWS Service Control Policies (SCPs).",
      },
      {
        value: "Multi-Factor Authentication (MFA).",
      },
      {
        value: "Amazon Macie.",
      },
    ],
    tags: [],
  },
  {
    id: "200",
    question:
      "Which AWS Service allows customers to download AWS SOC & PCI reports?",
    options: [
      {
        value: "AWS Well-Architected Tool.",
      },
      {
        value: "AWS Artifact.",
        answer: 1,
      },
      {
        value: "AWS Glue.",
      },
      {
        value: "Amazon Chime.",
      },
    ],
    tags: [],
  },
  {
    id: "201",
    question:
      "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
    options: [
      {
        value: "Least Privilege.",
      },
      {
        value: "Pilot Light.",
      },
      {
        value: "Fault Tolerance.",
        answer: 1,
      },
      {
        value: "Multi-threading.",
      },
    ],
    tags: [],
  },
  {
    id: "202",
    question:
      "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
    options: [
      {
        value: "All up-front reservation.",
        answer: 1,
      },
      {
        value:
          "All reserved instance payment options provide the same discount level.",
      },
      {
        value: "Partial up-front reservation.",
      },
      {
        value: "No up-front reservation.",
      },
    ],
    tags: [],
  },
  {
    id: "203",
    question:
      "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
    options: [
      {
        value: "Access control.",
        answer: 1,
      },
      {
        value: "Physical MFA devices.",
      },
      {
        value: "Data encryption.",
        answer: 1,
      },
      {
        value: "Unlimited storage.",
      },
      {
        value: "Load balancing.",
      },
    ],
    tags: [],
  },
  {
    id: "204",
    question:
      "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, {2value minutes and 7 seconds. How much time will the customer be billed for?",
    options: [
      {
        value:
          "3 hours for the Linux instance and 5 hours for the CentOS instance.",
      },
      {
        value:
          "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, {2value minutes and 7 seconds for the CentOS instance.",
      },
      {
        value:
          "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
        answer: 1,
      },
      {
        value:
          "3 hours for the Linux instance and 4 hours, 2value minutes and 7 seconds for the CentOS instance.",
      },
    ],
    tags: [],
  },
  {
    id: "205",
    question:
      "What is the AWS Support feature that allows customers to manage support cases programmatically?",
    options: [
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "AWS Operations Support.",
      },
      {
        value: "AWS Support API.",
        answer: 1,
      },
      {
        value: "AWS Personal Health Dashboard.",
      },
    ],
    tags: [],
  },
  {
    id: "206",
    question:
      "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
    options: [
      {
        value: "AWS CLI.",
        answer: 1,
      },
      {
        value: "AWS Security Groups.",
      },
      {
        value: "AWS SDKs.",
        answer: 1,
      },
      {
        value: "AWS Network Access Control Lists.",
      },
      {
        value: "AWS CodeCommit.",
      },
    ],
    tags: [],
  },
  {
    id: "207",
    question:
      "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
    options: [
      {
        value: "AWS Resource Groups.",
      },
      {
        value: "IAM Policies.",
      },
      {
        value: "IAM Roles.",
      },
      {
        value: "IAM Users.",
        answer: 1,
      },
      {
        value: "AWS Organizations.",
      },
    ],
    tags: [],
  },
  {
    id: "208",
    question:
      "Which of the following Amazon RDS features facilitates offloading of database read activity?",
    options: [
      {
        value: "Database Snapshots.",
      },
      {
        value: "Multi-AZ Deployments.",
      },
      {
        value: "Automated Backups.",
      },
      {
        value: "Read Replicas.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "209",
    question:
      "How does AWS notify customers about security and privacy events pertaining to AWS services?",
    options: [
      {
        value: "Using the AWS ACM service.",
      },
      {
        value: "Using Security Bulletins.",
        answer: 1,
      },
      {
        value: "Using the AWS Management Console.",
      },
      {
        value: "Using Compliance Resources.",
      },
    ],
    tags: [],
  },
  {
    id: "210",
    question:
      "Which IAM entity can best be used to grant temporary access to your AWS resources?",
    options: [
      {
        value: "IAM Users.",
      },
      {
        value: "Key Pair.",
      },
      {
        value: "IAM Roles.",
        answer: 1,
      },
      {
        value: "IAM Groups.",
      },
    ],
    tags: [],
  },
  {
    id: "211",
    question:
      "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
    options: [
      {
        value: "AWS Global Accelerator.",
      },
      {
        value: "AWS Application Load Balancer (ALB).",
        answer: 1,
      },
      {
        value: "Amazon CloudFront.",
      },
      {
        value: "Transit VPC.",
      },
    ],
    tags: [],
  },
  {
    id: "212",
    question:
      "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
    options: [
      {
        value: "Use Software test automation tools.",
      },
      {
        value: "Use AWS CodeDeploy to build and automate your AWS environment.",
      },
      {
        value: "Use code to provision and operate your AWS infrastructure.",
        answer: 1,
      },
      {
        value: "Migrate all of your applications to a dedicated host.",
      },
    ],
    tags: [],
  },
  {
    id: "213",
    question:
      "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
    options: [
      {
        value: "Restrict any API call made through SDKs or CLI.",
      },
      {
        value:
          "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.",
      },
      {
        value:
          "Require Multi-Factor Authentication (MFA) (Correct) for all IAM User access.",
        answer: 1,
      },
      {
        value: "Set up two login passwords.",
      },
    ],
    tags: [],
  },
  {
    id: "214",
    question: "Which AWS Service offers volume discounts based on usage?",
    options: [
      {
        value: "Amazon VPC.",
      },
      {
        value: "Amazon S3.",
        answer: 1,
      },
      {
        value: "Amazon Lightsail.",
      },
      {
        value: "AWS Cost Explorer.",
      },
    ],
    tags: [],
  },
  {
    id: "215",
    question:
      "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
    options: [
      {
        value: "The AWS Region's security level.",
      },
      {
        value: "Data sovereignty.",
      },
      {
        value: "Cost.",
        answer: 1,
      },
      {
        value: "The planned number of VPCs.",
      },
      {
        value: "Geographic proximity to the company's location.",
      },
    ],
    tags: [],
  },
  {
    id: "216",
    question:
      "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
    options: [
      {
        value: "Amazon EFS.",
      },
      {
        value: "Amazon Neptune.",
      },
      {
        value: "Amazon ElastiCache.",
        answer: 1,
      },
      {
        value: "DAX.",
      },
    ],
    tags: [],
  },
  {
    id: "217",
    question:
      "What are the advantages of using Auto Scaling Groups for EC2 instances?",
    options: [
      {
        value:
          "Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.",
      },
      {
        value:
          "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.",
        answer: 1,
      },
      {
        value:
          "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.",
      },
      {
        value:
          "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.",
      },
    ],
    tags: [],
  },
  {
    id: "218",
    question:
      "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
    options: [
      {
        value: "AWS helps customers invest more in capital expenditures.",
      },
      {
        value:
          "AWS automates all infrastructure operations, so customers save more on human resources costs.",
      },
      {
        value:
          "AWS continues to lower the cost of cloud computing for its customers.",
        answer: 1,
      },
      {
        value: "AWS secures AWS resources at no additional charge.",
      },
    ],
    tags: [],
  },
  {
    id: "219",
    question:
      "Which of the following are examples of the customer's responsibility to implement “security IN the cloud”? (Choose TWO)",
    options: [
      {
        value: "Building a schema for an application.",
        answer: 1,
      },
      {
        value: "Replacing physical hardware.",
      },
      {
        value: "Creating a new hypervisor.",
      },
      {
        value: "Patch management of the underlying infrastructure.",
      },
      {
        value: "File system encryption.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "220",
    question:
      "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
    options: [
      {
        value: "AWS CloudHSM.",
      },
      {
        value: "U2F Security Key.",
        answer: 1,
      },
      {
        value: "AWS Access Keys.",
      },
      {
        value: "AWS Key Pair.",
      },
    ],
    tags: [],
  },
  {
    id: "221",
    question:
      "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
    options: [
      {
        value: "Amazon SNS.",
      },
      {
        value: "AWS Elastic Beanstalk.",
        answer: 1,
      },
      {
        value: "AWS Systems Manager.",
      },
      {
        value: "AWS Trusted Advisor.",
      },
    ],
    tags: [],
  },
  {
    id: "222",
    question:
      "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
    options: [
      {
        value: "The amount of time the instances will be running.",
      },
      {
        value: "Number of security groups.",
        answer: 1,
      },
      {
        value: "Allocated Elastic IP Addresses.",
      },
      {
        value: "Number of Hosted Zones.",
        answer: 1,
      },
      {
        value: "Number of instances.",
      },
    ],
    tags: [],
  },
  {
    id: "223",
    question:
      "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
    options: [
      {
        value: "AWS Data Pipeline.",
      },
      {
        value: "AWS Storage Gateway.",
        answer: 1,
      },
      {
        value: "Amazon Aurora.",
      },
      {
        value: "Amazon EFS.",
      },
    ],
    tags: [],
  },
  {
    id: "224",
    question:
      "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
    options: [
      {
        value: "Amazon Simple Storage Service.",
        answer: 1,
      },
      {
        value: "Amazon Elastic Block Store.",
      },
      {
        value: "Amazon Elastic Container Service.",
      },
      {
        value: "AWS Storage Gateway.",
      },
    ],
    tags: [],
  },
  {
    id: "225",
    question:
      "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
    options: [
      {
        value: "EBS and S3 are accessible only to the root account owner.",
      },
      {
        value:
          "The systems administrator must contact AWS Support first to activate his new IAM account.",
      },
      {
        value: "There is not enough space in S3 to store the snapshots.",
      },
      {
        value: "There is a non-explicit deny to all new users.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "226",
    question:
      "An external auditor is requesting a log of all accesses to the AWS resources in the company's account. Which of the following services will provide the auditor with the requested information?",
    options: [
      {
        value: "AWS CloudTrail.",
        answer: 1,
      },
      {
        value: "Amazon CloudFront.",
      },
      {
        value: "AWS CloudFormation.",
      },
      {
        value: "Amazon CloudWatch.",
      },
    ],
    tags: [],
  },
  {
    id: "227",
    question: "Which of the below options is true of Amazon Cloud Directory?",
    options: [
      {
        value:
          "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.",
        answer: 1,
      },
      {
        value:
          "Amazon Cloud Directory enables the analysis of video and data streams in real time.",
      },
      {
        value:
          "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.",
      },
      {
        value:
          "Amazon Cloud Directory allows for registration and management of domain names.",
      },
    ],
    tags: [],
  },
  {
    id: "228",
    question:
      "A user has opened a 'Production System Down' support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
    options: [
      {
        value: "12 hours.",
      },
      {
        value: "15 minutes.",
      },
      {
        value: "24 hours.",
      },
      {
        value: "One hour.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "229",
    question:
      "Which of the below options is a best practice for making your application on AWS highly available?",
    options: [
      {
        value: "Deploy the application to at least two Availability Zones.",
        answer: 1,
      },
      {
        value: "Use Elastic Load Balancing (ELB) across multiple AWS Regions.",
      },
      {
        value:
          "Deploy the application code on at least two servers in the same Availability Zone.",
      },
      {
        value: "Rewrite the application code to handle all incoming requests.",
      },
    ],
    tags: [],
  },
  {
    id: "230",
    question:
      "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
    options: [
      {
        value: "Labor and IT costs.",
        answer: 1,
      },
      {
        value: "Cooling and power consumption.",
        answer: 1,
      },
      {
        value: "Amazon EBS computing power.",
      },
      {
        value: "Software architecture.",
      },
      {
        value: "Software compatibility.",
      },
    ],
    tags: [],
  },
  {
    id: "231",
    question:
      "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
    options: [
      {
        value: "AWS Basic Support.",
      },
      {
        value: "AWS Developer Support.",
      },
      {
        value: "AWS Business Support.",
      },
      {
        value: "AWS Enterprise Support.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "232",
    question:
      "Which of the following AWS offerings are serverless services? (Choose TWO)",
    options: [
      {
        value: "Amazon EC2.",
      },
      {
        value: "AWS Lambda.",
      },
      {
        value: "Amazon DynamoDB.",
        answer: 1,
      },
      {
        value: "Amazon EMR.",
      },
      {
        value: "Amazon RDS.",
      },
    ],
    tags: [],
  },
  {
    id: "233",
    question:
      "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
    options: [
      {
        value: "Amazon GuardDuty.",
      },
      {
        value: "AWS ACM.",
        answer: 1,
      },
      {
        value: "Amazon Detective.",
      },
      {
        value: "AWS WAF.",
      },
    ],
    tags: [],
  },
  {
    id: "234",
    question:
      "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
    options: [
      {
        value: "AWS Config.",
      },
      {
        value: "AWS OpsWorks.",
        answer: 1,
      },
      {
        value: "AutoScaling.",
      },
      {
        value: "AWS CloudFormation.",
      },
    ],
    tags: [],
  },
  {
    id: "235",
    question:
      "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
    options: [
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon EFS.",
      },
      {
        value: "Amazon S3.",
        answer: 1,
      },
      {
        value: "Amazon Instance Store.",
      },
    ],
    tags: [],
  },
  {
    id: "236",
    question:
      "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
    options: [
      {
        value: "AWS WAF.",
        answer: 1,
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "AWS Cloud9.",
      },
      {
        value: "AWS CloudTrail.",
      },
    ],
    tags: [],
  },
  {
    id: "237",
    question:
      "A company is migrating a web application to AWS. The application's compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
    options: [
      {
        value: "On-demand Instances.",
      },
      {
        value: "Dedicated Hosts.",
      },
      {
        value: "Spot Instances.",
      },
      {
        value: "Reserved Instances.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "238",
    question:
      "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
    options: [
      {
        value:
          "Create an IAM role and attach a policy with Amazon DynamoDB access permissions.",
      },
      {
        value:
          "Create an IAM role and attach a policy with Administrator access permissions.",
      },
      {
        value:
          "Create an IAM user and attach a policy with Amazon DynamoDB access permissions.",
        answer: 1,
      },
      {
        value:
          "Create an IAM user and attach a policy with Administrator access permissions.",
      },
    ],
    tags: [],
  },
  {
    id: "239",
    question:
      "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
    options: [
      {
        value:
          "Generate new IAM access keys every time you delegate permissions.",
      },
      {
        value:
          "Store the required AWS credentials directly within the application code.",
      },
      {
        value:
          "Use temporary security credentials (IAM roles) instead of long-term access keys.",
        answer: 1,
      },
      {
        value:
          "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.",
      },
    ],
    tags: [],
  },
  {
    id: "240",
    question:
      "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
    options: [
      {
        value: "Use servers instead of managed services.",
      },
      {
        value: "Use existing third-party software licenses on AWS.",
        answer: 1,
      },
      {
        value:
          "Migrate production workloads to AWS edge locations instead of AWS Regions.",
      },
      {
        value:
          "Use AWS Outposts to run all workloads in a cost-optimized environment.",
      },
    ],
    tags: [],
  },
  {
    id: "241",
    question:
      "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
    options: [
      {
        value: "Amazon SQS.",
        answer: 1,
      },
      {
        value: "Virtual Private Gateway.",
      },
      {
        value: "AWS Artifact.",
      },
      {
        value: "Amazon CloudFront.",
      },
    ],
    tags: [],
  },
  {
    id: "242",
    question:
      "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
    options: [
      {
        value: "Amazon Connect.",
      },
      {
        value: "AWS CLI.",
      },
      {
        value: "AWS Identity and Access Management (IAM).",
        answer: 1,
      },
      {
        value: "Amazon SNS.",
      },
      {
        value: "Amazon Virtual Private Cloud.",
      },
    ],
    tags: [],
  },
  {
    id: "243",
    question:
      "According to best practices, which of the below options is best suited for processing a large number of binary files?",
    options: [
      {
        value: "Vertically scaling EC2 instances.",
      },
      {
        value: "Running RDS instances in parallel.",
        answer: 1,
      },
      {
        value: "Vertically scaling RDS instances.",
      },
      {
        value: "Running EC2 instances in parallel.",
      },
    ],
    tags: [],
  },
  {
    id: "244",
    question:
      "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
    options: [
      {
        value: "AWS Cost Explorer.",
      },
      {
        value: "AWS Pricing Calculator.",
        answer: 1,
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Cost & Usage Report.",
      },
    ],
    tags: [],
  },
  {
    id: "245",
    question:
      "What should you do if you see resources, which you don't remember creating, in the AWS Management Console? (Choose TWO)",
    options: [
      {
        value: "Stop all running services and open an investigation.",
      },
      {
        value:
          "Give your root account password to AWS Support so that they can assistin troubleshooting and securing the account.",
      },
      {
        value:
          "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.",
      },
      {
        value:
          "Open an investigation and delete any potentially compromised IAM users.",
      },
      {
        value:
          "Change your AWS root account password and the passwords of any IAM users.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "246",
    question:
      "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
    options: [
      {
        value: "Elastic coupling.",
      },
      {
        value: "Loosely coupling.",
        answer: 1,
      },
      {
        value: "Scalable coupling.",
      },
      {
        value: "Tightly coupling.",
      },
    ],
    tags: [],
  },
  {
    id: "247",
    question:
      "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
    options: [
      {
        value: "Amazon Elastic File System.",
        answer: 1,
      },
      {
        value: "Amazon Simple Storage Service.",
      },
      {
        value: "Amazon Elastic Block Store.",
      },
      {
        value: "AWS Storage Gateway.",
      },
    ],
    tags: [],
  },
  {
    id: "248",
    question:
      "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
    options: [
      {
        value: "Create private connection to your data center.",
      },
      {
        value: "Achieve global high availability.",
      },
      {
        value: "Automate the process of provisioning new compute resources.",
      },
      {
        value: "Make synchronous replication of your data possible.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "249",
    question:
      "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
    options: [
      {
        value:
          "Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.",
      },
      {
        value:
          "Lambda natively supports a number of programming languages such as Node.js, Python, and Java.",
        answer: 1,
      },
      {
        value:
          "Lambda is AWS' proprietary programming language for microservices.",
      },
      {
        value:
          "Lambda doesn't support programming languages; it is a serverless compute service.",
      },
      {
        value: "Lambda can support any programming language using an API.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "250",
    question: "What are the capabilities of AWS X-Ray? (Choose TWO)",
    options: [
      {
        value: "Automatically decouples application components.",
      },
      {
        value:
          "Facilitates tracking of user requests to identify application issues.",
      },
      {
        value: "Helps improve application performance.",
        answer: 1,
      },
      {
        value: "Deploys applications to Amazon EC2 instances.",
      },
      {
        value: "Deploys applications to on-premises servers.",
      },
    ],
    tags: [],
  },
  {
    id: "251",
    question:
      "Which of the following is true regarding the AWS availability zones and edge locations?",
    options: [
      {
        value:
          "Edge locations are located in separate Availability Zones worldwide to serve global customers.",
      },
      {
        value:
          "An availability zone exists within an edge location to distribute content globally with low latency.",
      },
      {
        value:
          "An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.",
      },
      {
        value:
          "An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "252",
    question:
      "Which features are included in the AWS Business Support Plan? (Choose TWO)",
    options: [
      {
        value: "24x7 access to customer service.",
        answer: 1,
      },
      {
        value:
          "Access to Cloud Support Engineers via email only during business hours.",
      },
      {
        value:
          "Access to the Infrastructure Event Management (IEM) feature for additional fee.",
        answer: 1,
      },
      {
        value: "24x7 access to the TAM feature.",
      },
      {
        value: "Partial access to the core Trusted Advisor checks.",
      },
    ],
    tags: [],
  },
  {
    id: "253",
    question:
      "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
    options: [
      {
        value: "Amazon GuardDuty.",
      },
      {
        value: "Amazon Personalize.",
      },
      {
        value: "Amazon Cognito.",
        answer: 1,
      },
      {
        value: "AWS IAM.",
      },
    ],
    tags: [],
  },
  {
    id: "254",
    question:
      "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
    options: [
      {
        value: "AWS CloudFormation.",
        answer: 1,
      },
      {
        value: "AWS Config.",
      },
      {
        value: "AWS CloudTrail.",
      },
      {
        value: "AWS Auto Scaling.",
      },
    ],
    tags: [],
  },
  {
    id: "255",
    question:
      "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
    options: [
      {
        value: "Eliminates the need to monitor servers and applications.",
      },
      {
        value: "Manages all the compliance and auditing tasks.",
      },
      {
        value: "Provides custom hardware to meet any specification.",
      },
      {
        value: "Eliminates the need to guess on infrastructure capacity needs.",
      },
      {
        value:
          "Enables customers to trade their capital expenses for operational expenses.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "256",
    question:
      "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
    options: [
      {
        value: "AWS Fargate.",
      },
      {
        value: "Amazon Elastic Compute Cloud.",
      },
      {
        value: "Amazon RDS.",
        answer: 1,
      },
      {
        value: "AWS Database Migration service (DMS).",
      },
      {
        value: "AWS Lambda.",
      },
    ],
    tags: [],
  },
  {
    id: "257",
    question:
      "Which AWS Service can perform health checks on Amazon EC2 instances?",
    options: [
      {
        value: "AWS CloudFormation.",
      },
      {
        value: "Amazon Route 53.",
        answer: 1,
      },
      {
        value: "Amazon Chime.",
      },
      {
        value: "Amazon Aurora.",
      },
    ],
    tags: [],
  },
  {
    id: "258",
    question:
      "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
    options: [
      {
        value: "Amazon Comprehend.",
      },
      {
        value: "AWS IAM.",
      },
      {
        value: "Amazon Polly.",
      },
      {
        value: "Amazon Rekognition.",
        answer: 1,
      },
    ],
    tags: ["Amazon Rekognition", "Machine Learning"],
  },
  {
    id: "259",
    question:
      "Which of the following are examples of AWS-managed databases? (Choose TWO)",
    options: [
      {
        value: "Amazon Neptune.",
        answer: 1,
      },
      {
        value: "Amazon CloudSearch.",
      },
      {
        value: "Microsoft SQL Server on Amazon EC2.",
      },
      {
        value: "MySQL on Amazon EC2.",
      },
      {
        value: "Amazon RDS for MySQL.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "260",
    question:
      "A company's AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
    options: [
      {
        value: "EC2 On-Demand Instances.",
      },
      {
        value: "EC2 Reserved Instances - No Upfront.",
      },
      {
        value: "EC2 Spot Instances.",
        answer: 1,
      },
      {
        value: "EC2 Reserved Instances - All Upfront.",
      },
    ],
    tags: [],
  },
  {
    id: "261",
    question:
      "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
    options: [
      {
        value: "AWS account owner.",
        answer: 1,
      },
      {
        value: "AWS technical account manager.",
      },
      {
        value: "AWS security team.",
      },
      {
        value: "AWS cloud support engineers.",
      },
    ],
    tags: [],
  },
  {
    id: "262",
    question:
      "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
    options: [
      {
        value: "AWS File Transfer Acceleration.",
      },
      {
        value: "AWS Server Migration Service.",
        answer: 1,
      },
      {
        value: "AWS Database Migration Service.",
      },
      {
        value: "AWS Application Discovery Service.",
      },
    ],
    tags: [],
  },
  {
    id: "263",
    question:
      "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
    options: [
      {
        value:
          "It helps AWS customers deploy their applications without worrying about the underlying infrastructure.",
      },
      {
        value: "It applies advanced IAM security features automatically.",
      },
      {
        value:
          "It automates the provisioning and updating of your infrastructure in a safe and controlled manner.",
      },
      {
        value:
          "It allows you to model your entire infrastructure in just a text file.",
        answer: 1,
      },
      {
        value: "It compiles and builds application code in a timely manner.",
      },
    ],
    tags: [],
  },
  {
    id: "264",
    question:
      "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
    options: [
      {
        value: "On-premises.",
      },
      {
        value: "Mixed.",
      },
      {
        value: "Hybrid.",
        answer: 1,
      },
      {
        value: "Cloud.",
      },
    ],
    tags: [],
  },
  {
    id: "265",
    question:
      "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
    options: [
      {
        value: "CloudEndure Disaster Recovery.",
        answer: 1,
      },
      {
        value: "CloudEndure Migration.",
      },
      {
        value: "AWS Backup.",
      },
      {
        value: "AWS Glue.",
      },
    ],
    tags: [],
  },
  {
    id: "266",
    question:
      "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
    options: [
      {
        value: "S3 Standard-IA.",
      },
      {
        value: "S3 Intelligent-Tiering.",
      },
      {
        value: "S3 Glacier Deep Archive.",
      },
      {
        value: "S3 Standard.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "267",
    question:
      "You want to create a backup of your data in another geographical location. Where should you create this backup?",
    options: [
      {
        value: "In another Edge location.",
      },
      {
        value: "In another Region.",
        answer: 1,
      },
      {
        value: "In another VPC.",
      },
      {
        value: "In another Availability Zone.",
      },
    ],
    tags: [],
  },
  {
    id: "268",
    question:
      "Which statement is true in relation to the security of Amazon EC2?",
    options: [
      {
        value: "You should use instance store volumes to store login data.",
      },
      {
        value:
          "You should regularly patch the operating system and applications on your EC2 instances.",
        answer: 1,
      },
      {
        value:
          "You should deploy critical components of your application in the Availability Zone that you trust.",
      },
      {
        value: "You can track all API calls using Amazon Athena.",
      },
    ],
    tags: [],
  },
  {
    id: "269",
    question:
      "What does AWS Cost Explorer provide to help manage your AWS spend?",
    options: [
      {
        value:
          "Cost comparisons between AWS Cloud environments and on-premises environments.",
      },
      {
        value:
          "Accurate estimates of AWS service costs based on your expected usage.",
      },
      {
        value: "Consolidated billing.",
      },
      {
        value: "Highly accurate cost forecasts for up to 12 months ahead.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "270",
    question:
      "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
    options: [
      {
        value: "RDS Single-AZ.",
      },
      {
        value: "RDS Write Replica.",
        answer: 1,
      },
      {
        value: "RDS Snapshots.",
      },
      {
        value: "RDS Multi-AZ.",
      },
    ],
    tags: [],
  },
  {
    id: "271",
    question:
      "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
    options: [
      {
        value: "Deleting all EBS volumes attached to the instances.",
      },
      {
        value: "You cannot minimize charges for on-demand instances.",
      },
      {
        value: "Terminating the instances.",
      },
      {
        value: "Stopping the instances.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "272",
    question:
      "Which of the following strategies helps protect your AWS root account?",
    options: [
      {
        value: "Delete root user access keys if you do not need them.",
        answer: 1,
      },
      {
        value:
          "Apply MFA for the root account and use it for all of your work.",
      },
      {
        value: "Access the root account only from your personal Mobile Phone.",
      },
      {
        value:
          "Only share your AWS account password or access keys with trusted persons.",
      },
    ],
    tags: [],
  },
  {
    id: "273",
    question:
      "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
    options: [
      {
        value: "The size of volumes provisioned per month.",
        answer: 1,
      },
      {
        value: "The compute capacity you consume.",
      },
      {
        value: "The amount of data you have stored in snapshots.",
        answer: 1,
      },
      {
        value: "The compute time you consume.",
      },
      {
        value: "The number of Snowball storage devices you request.",
      },
    ],
    tags: [],
  },
  {
    id: "274",
    question:
      "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
    options: [
      {
        value: "Attach a separate IAM policy for each individual account.",
      },
      {
        value: "Apply the Principle of Least Privilege.",
        answer: 1,
      },
      {
        value:
          "For security purposes, you should not grant any permission to the DevOps team.",
      },
      {
        value: "Create six different IAM passwords.",
      },
    ],
    tags: [],
  },
  {
    id: "275",
    question:
      "Which of the following has the greatest impact on cost? (Choose TWO)",
    options: [
      {
        value: "Compute charges.",
        answer: 1,
      },
      {
        value: "The number of services used.",
      },
      {
        value: "Data Transfer In charges.",
      },
      {
        value: "Data Transfer Out charges.",
        answer: 1,
      },
      {
        value: "The number of IAM roles provisioned.",
      },
    ],
    tags: [],
  },
  {
    id: "276",
    question: "Who from the following will get the largest discount?",
    options: [
      {
        value:
          "A user who chooses to buy On-demand, Convertible, Partial upfront instances.",
      },
      {
        value:
          "A user who chooses to buy Reserved, Convertible, All upfront instances.",
      },
      {
        value:
          "A user who chooses to buy Reserved, Standard, No upfront instances.",
      },
      {
        value:
          "A user who chooses to buy Reserved, Standard, All upfront instances.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "277",
    question:
      "Which of the following is an available option when purchasing Amazon EC2 instances?",
    options: [
      {
        value: "The ability to bid to get the lowest possible prices.",
      },
      {
        value:
          "The ability to register EC2 instances to get volume discounts on every hour the instances are running.",
      },
      {
        value: "The ability to buy Dedicated Instances for up to 90% discount.",
      },
      {
        value: "The ability to pay upfront to get lower hourly costs.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "278",
    question: "What does the term “Economies of scale” mean?",
    options: [
      {
        value: "It means that you save more when you consume more.",
      },
      {
        value:
          "It means as more time passes using AWS, you pay more for its services.",
      },
      {
        value: "It means that AWS will continuously lower costs as it grows.",
        answer: 1,
      },
      {
        value: "It means that you have the ability to pay as you go.",
      },
    ],
    tags: ["pricing models"],
  },
  {
    id: "279",
    question:
      "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
    options: [
      {
        value: "AWS Auto Scaling.",
        answer: 1,
      },
      {
        value: "Amazon Elastic Compute Cloud.",
      },
      {
        value: "Amazon Elastic File System.",
      },
      {
        value: "Amazon ElastiCache.",
      },
    ],
    tags: [],
  },
  {
    id: "280",
    question: "Which of the below options is true of Amazon VPC?",
    options: [
      {
        value:
          "Amazon VPC allows customers to control user interactions with all other AWS resources.",
      },
      {
        value:
          "AWS Customers have complete control over their Amazon VPC virtual networking environment.",
        answer: 1,
      },
      {
        value:
          "AWS is responsible for all the management and configuration details of Amazon VPC.",
      },
      {
        value:
          "Amazon VPC helps customers to review their AWS architecture and adopt best practices.",
      },
    ],
    tags: [],
  },
  {
    id: "281",
    question:
      "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
    options: [
      {
        value: "AWS Cost Explorer.",
      },
      {
        value: "AWS Pricing Calculator.",
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS TCO Calculator.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "282",
    question:
      "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
    options: [
      {
        value: "AWS Config.",
        answer: 1,
      },
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon MQ.",
      },
      {
        value: "AWS Trusted Advisor.",
        answer: 1,
      },
      {
        value: "Amazon Cognito.",
      },
    ],
    tags: [],
  },
  {
    id: "283",
    question:
      "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
    options: [
      {
        value: "AWS OpsWorks.",
        answer: 1,
      },
      {
        value: "AWS CloudFormation.",
      },
      {
        value: "AWS Quick Starts.",
      },
      {
        value: "AWS CloudTrail.",
      },
    ],
    tags: [],
  },
  {
    id: "284",
    question:
      "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
    options: [
      {
        value: "Amazon Kinesis.",
      },
      {
        value: "Amazon QuickSight.",
      },
      {
        value: "AWS CodeDeploy.",
        answer: 1,
      },
      {
        value: "Amazon Athena.",
      },
    ],
    tags: [],
  },
  {
    id: "285",
    question: "Select the services that are server-based: (Choose TWO)",
    options: [
      {
        value: "Amazon RDS.",
        answer: 1,
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "AWS Lambda.",
      },
      {
        value: "AWS Fargate.",
      },
      {
        value: "Amazon EMR.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "286",
    question: "What best describes penetration testing?",
    options: [
      {
        value:
          "Testing your application's response time from different locations.",
      },
      {
        value:
          "Testing your network to find security vulnerabilities that an attacker could exploit.",
        answer: 1,
      },
      {
        value: "Testing your instances to check for the unhealthy ones.",
      },
      {
        value: "Testing your software for bugs and errors.",
      },
    ],
    tags: [],
  },
  {
    id: "287",
    question:
      "Which of the following are use cases for Amazon EMR? (Choose TWO)",
    options: [
      {
        value:
          "Enables you to backup extremely large amounts of data at very low costs.",
      },
      {
        value:
          "Enables you to move Exabyte-scale data from on-premises datacenters into AWS.",
      },
      {
        value:
          "Enables you to analyze and process extremely large amounts of data in a timely manner.",
      },
      {
        value:
          "Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.",
        answer: 1,
      },
      {
        value: "Enables you to easily run and manage Docker containers.",
      },
    ],
    tags: [],
  },
  {
    id: "288",
    question:
      "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?",
    options: [
      {
        value: "There is no chat feature in AWS support.",
      },
      {
        value:
          "The chat feature is available for all plans for an additional fee, but you have to request it first.",
      },
      {
        value: "At a minimum, upgrade to Business support plan.",
        answer: 1,
      },
      {
        value: "Upgrade from the Basic Support plan to Developer Support.",
      },
    ],
    tags: [],
  },
  {
    id: "289",
    question:
      "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn't have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
    options: [
      {
        value: "AWS Fargate.",
      },
      {
        value: "AWS Batch.",
      },
      {
        value: "Amazon Personalize.",
      },
      {
        value: "AWS Elastic Beanstalk.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "290",
    question:
      "Which statement best describes the AWS Pay-As-You-Go pricing model?",
    options: [
      {
        value:
          "With AWS, you replace low upfront expenses with large variable payments.",
      },
      {
        value:
          "With AWS, you replace low upfront expenses with large fixed payments.",
      },
      {
        value:
          "With AWS, you replace large upfront expenses with low fixed payments.",
      },
      {
        value:
          "With AWS, you replace large capital expenses with low variable payments.",
        answer: 1,
      },
    ],
    tags: ["pricing models"],
  },
  {
    id: "291",
    question:
      "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
    options: [
      {
        value: "Database setup.",
        answer: 1,
      },
      {
        value: "Network traffic protection.",
      },
      {
        value: "Management of the operating system.",
        answer: 1,
      },
      {
        value: "Access management.",
      },
      {
        value: "Management of firewall rules.",
      },
    ],
    tags: [],
  },
  {
    id: "292",
    question: "Which of the following strategies help analyze costs in AWS?",
    options: [
      {
        value: "Using tags to group resources.",
        answer: 1,
      },
      {
        value:
          "Using AWS CloudFormation to automate the deployment of resources.",
      },
      {
        value: "Deploying resources of the same type in different regions.",
      },
      {
        value:
          "Configuring Amazon Inspector to automatically analyze costs and email reports.",
      },
    ],
    tags: [],
  },
  {
    id: "293",
    question:
      "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
    options: [
      {
        value: "AWS Direct Connect.",
        answer: 1,
      },
      {
        value: "Amazon Comprehend.",
      },
      {
        value: "AWS Snowmobile.",
      },
      {
        value: "AWS VPN.",
      },
    ],
    tags: [],
  },
  {
    id: "294",
    question: "What is the main benefit of the AWS Storage Gateway service?",
    options: [
      {
        value:
          "It automates the process of building, maintaining, and running ETL jobs.",
      },
      {
        value:
          "It provides physical devices to migrate data from on premises to AWS.",
      },
      {
        value:
          "It allows integration of on-premises IT environments with Cloud Storage.",
        answer: 1,
      },
      {
        value:
          "It provides hardware-based key storage for regulatory compliance.",
      },
    ],
    tags: [],
  },
  {
    id: "295",
    question:
      "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
    options: [
      {
        value: "Amazon S3 Glacier Deep Archive.",
      },
      {
        value: "Amazon S3 Standard-Infrequent Access.",
        answer: 1,
      },
      {
        value: "Amazon S3 Glacier.",
      },
      {
        value: "Instance Store.",
      },
    ],
    tags: [],
  },
  {
    id: "296",
    question:
      "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
    options: [
      {
        value: "AWS Global Accelerator.",
        answer: 1,
      },
      {
        value: "AWS Data Pipeline.",
      },
      {
        value: "AWS DAX Accelerator.",
      },
      {
        value: "AWS Transfer Acceleration.",
      },
    ],
    tags: [],
  },
  {
    id: "297",
    question:
      "Why are Serverless Architectures more economical than Server-based Architectures?",
    options: [
      {
        value: "Serverless Architectures use new powerful computing devices.",
      },
      {
        value:
          "With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.",
        answer: 1,
      },
      {
        value:
          "When you reserve serverless capacity, you will get large discounts compared to server reservation.",
      },
      {
        value:
          "With Serverless Architectures you have the ability to scale automatically up or down as demand changes.",
      },
    ],
    tags: [],
  },
  {
    id: "298",
    question:
      "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
    options: [
      {
        value:
          "Point-to-point connectivity between an on-premises data center and AWS.",
      },
      {
        value: "Detects configuration changes in the AWS environment.",
      },
      {
        value: "DNS configuration and management.",
      },
      {
        value:
          "Manages global application traffic through a variety of routing types.",
        answer: 1,
      },
      {
        value: "Provides infrastructure security optimization recommendations.",
      },
    ],
    tags: [],
  },
  {
    id: "299",
    question:
      "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
    options: [
      {
        value: "AWS Snowmobile.",
      },
      {
        value: "AWS Import/Export.",
      },
      {
        value: "AWS DMS.",
      },
      {
        value: "AWS Snowball.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "300",
    question:
      "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
    options: [
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon Athena.",
      },
      {
        value: "AWS Cloud9.",
      },
      {
        value: "Amazon ElastiCache for Redis.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "301",
    question:
      "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
    options: [
      {
        value: "Delete the encryption keys once your data is encrypted.",
      },
      {
        value: "With AWS you do not need to worry about encryption.",
      },
      {
        value: "Enable S3 Encryption.",
      },
      {
        value: "Encrypt the data prior to uploading it.",
        answer: 1,
      },
      {
        value: "Delete all IAM users that have access to S3.",
      },
    ],
    tags: [],
  },
  {
    id: "302",
    question: "Which AWS service helps developers compile and test their code?",
    options: [
      {
        value: "AWS CodeDeploy.",
      },
      {
        value: "AWS CodeCommit.",
      },
      {
        value: "CloudEndure.",
      },
      {
        value: "AWS CodeBuild.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "303",
    question:
      "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
    options: [
      {
        value: "Using default encryption for any number of S3 buckets.",
      },
      {
        value: "The number of EBS volumes attached to your instances.",
      },
      {
        value: "The storage class used for the objects stored.",
        answer: 1,
      },
      {
        value: "Creating and deleting S3 buckets.",
      },
      {
        value: "The total size in gigabytes of all objects stored.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "304",
    question: "What does the Amazon CloudFront service provide? (Choose TWO)",
    options: [
      {
        value: "Tracks user activity and APl usage.",
      },
      {
        value: "Increases application availability by caching at the edge.",
        answer: 1,
      },
      {
        value: "Enables faster disaster recovery.",
      },
      {
        value: "Stores archived data at very low costs.",
      },
      {
        value: "Delivers content to end users with low latency.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "305",
    question:
      "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
    options: [
      {
        value: "Amazon Lightsail.",
      },
      {
        value: "Amazon Connect.",
        answer: 1,
      },
      {
        value: "AWS Direct Connect.",
      },
      {
        value: "AWS Elastic Beanstalk.",
      },
    ],
    tags: ["Amazon Connect", "machine learning"],
  },
  {
    id: "306",
    question:
      "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
    options: [
      {
        value: "Using the AWS Cost & Usage Report.",
        answer: 1,
      },
      {
        value: "Using the AWS Total Cost of Ownership (TCO) dashboard.",
      },
      {
        value: "Using the AWS CloudWatch logs dashboard.",
      },
      {
        value: "Using the Amazon VPC dashboard.",
      },
    ],
    tags: [],
  },
  {
    id: "307",
    question:
      "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
    options: [
      {
        value: "Convertible.",
        answer: 1,
      },
      {
        value: "Expedited.",
      },
      {
        value: "Bulk.",
      },
      {
        value: "Spot.",
      },
      {
        value: "Standard.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "308",
    question:
      "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
    options: [
      {
        value: "AWS Artifact.",
        answer: 1,
      },
      {
        value: "AWS Config.",
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "AWS CloudTrail.",
      },
    ],
    tags: [],
  },
  {
    id: "309",
    question:
      "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
    options: [
      {
        value: "AWS Resource Groups.",
        answer: 1,
      },
      {
        value: "AWS Placement Groups.",
      },
      {
        value: "AWS Management Console.",
      },
      {
        value: "AWS Tag Editor.",
      },
    ],
    tags: [],
  },
  {
    id: "310",
    question: "Which AWS service collects metrics from running EC2 instances?",
    options: [
      {
        value: "Amazon Inspector.",
      },
      {
        value: "Amazon CloudWatch.",
        answer: 1,
      },
      {
        value: "AWS CloudFormation.",
      },
      {
        value: "AWS CloudTrail.",
      },
    ],
    tags: [],
  },
  {
    id: "311",
    question:
      "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
    options: [
      {
        value: "Amazon Detective.",
      },
      {
        value: "AWS X-Ray.",
        answer: 1,
      },
      {
        value: "AWS Security Hub.",
      },
      {
        value: "AWS Shield.",
      },
    ],
    tags: [],
  },
  {
    id: "312",
    question:
      "Which of the following compute resources are serverless? (Choose TWO)",
    options: [
      {
        value: "Amazon EC2.",
      },
      {
        value: "AWS Fargate.",
      },
      {
        value: "AWS Lambda.",
        answer: 1,
      },
      {
        value: "Amazon ECS.",
      },
      {
        value: "Amazon EMR.",
      },
    ],
    tags: [],
  },
  {
    id: "313",
    question:
      "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
    options: [
      {
        value: "Use EC2 Dedicated Hosts.",
        answer: 1,
      },
      {
        value: "Use EC2 Reserved Instances.",
      },
      {
        value: "Use EC2 Spot Instances.",
      },
      {
        value: "Use EC2 On-demand Instances.",
      },
    ],
    tags: [],
  },
  {
    id: "314",
    question:
      "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
    options: [
      {
        value: "Tagging Enforcement.",
      },
      {
        value: "Architecture Optimization.",
        answer: 1,
      },
      {
        value: "Budgeting Processes.",
      },
      {
        value: "Resource Controls.",
      },
    ],
    tags: [],
  },
  {
    id: "315",
    question:
      "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
    options: [
      {
        value: "RedShift.",
      },
      {
        value: "RDS.",
        answer: 1,
      },
      {
        value: "CloudHSM.",
      },
      {
        value: "DMS.",
      },
    ],
    tags: [],
  },
  {
    id: "316",
    question: "What can you use to assign permissions directly to an IAM user?",
    options: [
      {
        value: "IAM Identity.",
      },
      {
        value: "IAM Group.",
      },
      {
        value: "IAM Role.",
      },
      {
        value: "IAM Policy.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "317",
    question:
      "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
    options: [
      {
        value:
          "AWS allows customers to launch powerful EC2 instances to handle spikes in load.",
      },
      {
        value: "AWS allows customers to pay upfront to get bigger discounts.",
      },
      {
        value:
          "AWS allows customers to launch and terminate EC2 instances based on demand.",
        answer: 1,
      },
      {
        value:
          "AWS allows customers to choose cheaper types of EC2 instances that best fit their needs.",
      },
    ],
    tags: [],
  },
  {
    id: "318",
    question:
      "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
    options: [
      {
        value: "PostgreSQL.",
      },
      {
        value: "Oracle.",
      },
      {
        value: "Microsoft SQL Server.",
      },
      {
        value: "Teradata.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "319",
    question:
      "Which of the following AWS services would help you migrate on-premise databases to AWS?",
    options: [
      {
        value: "AWS DMS.",
        answer: 1,
      },
      {
        value: "Amazon S3 Transfer Acceleration.",
      },
      {
        value: "AWS Directory Service.",
      },
      {
        value: "AWS Transit Gateway.",
      },
    ],
    tags: [],
  },
  {
    id: "320",
    question:
      "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
    options: [
      {
        value: "Run WordPress on an Amazon Lightsail instance.",
        answer: 1,
      },
      {
        value: "Install WordPress on an Amazon EC2 instance.",
      },
      {
        value: "Use the Amazon S3 Web hosting feature.",
      },
      {
        value:
          "Host the website directly on AWS Cloud Development Kit (AWS CDK).",
      },
    ],
    tags: [],
  },
  {
    id: "321",
    question:
      "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
    options: [
      {
        value: "AWS KMS.",
        answer: 1,
      },
      {
        value: "AWS Certificate Manager.",
      },
      {
        value: "AWS CodeDeploy.",
      },
      {
        value: "AWS CodeCommit.",
      },
      {
        value: "CloudHSM.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "322",
    question:
      "Which of the following services allows you to install and run custom relational database software?",
    options: [
      {
        value: "Amazon EC2.",
        answer: 1,
      },
      {
        value: "Amazon Cognito.",
      },
      {
        value: "Amazon RDS.",
      },
      {
        value: "Amazon Inspector.",
      },
    ],
    tags: [],
  },
  {
    id: "323",
    question:
      "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
    options: [
      {
        value: "Auto Scaling.",
        answer: 1,
      },
      {
        value: "ELB.",
      },
      {
        value: "Amazon Route 53.",
      },
      {
        value: "Amazon Elastic Container Service.",
      },
    ],
    tags: [],
  },
  {
    id: "324",
    question:
      "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
    options: [
      {
        value: "AWS IAM.",
        answer: 1,
      },
      {
        value: "AWS Outposts.",
      },
      {
        value: "AWS Federation.",
      },
      {
        value: "Amazon Redshift.",
      },
    ],
    tags: [],
  },
  {
    id: "325",
    question:
      "What are some key design principles for designing public cloud systems? (Choose TWO)",
    options: [
      {
        value: "Reserved capacity instead of on demand.",
      },
      {
        value: "Loose coupling over tight coupling.",
        answer: 1,
      },
      {
        value: "Servers instead of managed services.",
      },
      {
        value: "Disposable resources instead of fixed servers.",
        answer: 1,
      },
      {
        value: "Multi-AZ deployments instead of multi-region deployments.",
      },
    ],
    tags: [],
  },
  {
    id: "326",
    question:
      "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
    options: [
      {
        value: "AWS CloudTrail Trails.",
      },
      {
        value: "IAM Credential Report.",
        answer: 1,
      },
      {
        value: "AWS Artifact reports.",
      },
      {
        value: "AWS Cost and Usage Report.",
      },
    ],
    tags: [],
  },
  {
    id: "327",
    question:
      "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
    options: [
      {
        value: "AWS Shield.",
      },
      {
        value: "AWS Certificate Manager.",
      },
      {
        value: "AWS CloudHSM.",
        answer: 1,
      },
      {
        value: "AWS WAF.",
      },
    ],
    tags: [],
  },
  {
    id: "328",
    question:
      "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
    options: [
      {
        value:
          "There is no need to architect for these capabilities in AWS, as AWS is redundant by default.",
      },
      {
        value: "Deploy the application in a single Availability Zone.",
      },
      {
        value:
          "Deploy the application in multiple Availability Zones in a single AWS region.",
      },
      {
        value:
          "Deploy the application in muitiple Availability Zones in multiple AWS regions.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "329",
    question:
      "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
    options: [
      {
        value: "Instance Store.",
      },
      {
        value: "S3.",
      },
      {
        value: "DynamoDB.",
        answer: 1,
      },
      {
        value: "Amazon Route 53.",
      },
      {
        value: "AWS VPN.",
      },
    ],
    tags: [],
  },
  {
    id: "330",
    question:
      "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
    options: [
      {
        value: "Number of Requests.",
      },
      {
        value: "Traffic Distribution.",
        answer: 1,
      },
      {
        value: "Number of Volumes.",
      },
      {
        value: "Instance type.",
      },
      {
        value: "Storage Class.",
      },
    ],
    tags: [],
  },
  {
    id: "331",
    question:
      "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
    options: [
      {
        value: "AWS Service Control Policies (SCPs).",
      },
      {
        value: "AWS Artifact.",
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Acceptable Use Policy.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "332",
    question:
      "Which of the following security resources are available to any user for free? (Choose TWO)",
    options: [
      {
        value: "AWS Bulletins.",
        answer: 1,
      },
      {
        value: "AWS TAM.",
      },
      {
        value: "AWS Support APl.",
      },
      {
        value: "AWS Security Blog.",
        answer: 1,
      },
      {
        value: "AWS Classroom Training.",
      },
    ],
    tags: [],
  },
  {
    id: "333",
    question:
      "How can you protect data stored on Amazon S3 from accidental deletion?",
    options: [
      {
        value: "By enabling S3 Versioning.",
        answer: 1,
      },
      {
        value: "By configuring S3 Bucket Policies.",
      },
      {
        value: "By configuring S3 Lifecycle Policies.",
      },
      {
        value: "By disabling S3 Cross-Region Replication (CRR).",
      },
    ],
    tags: [],
  },
  {
    id: "334",
    question:
      "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
    options: [
      {
        value: "Securing regions and edge locations.",
        answer: 1,
      },
      {
        value: "Performing auditing tasks.",
      },
      {
        value: "Monitoring AWS resources usage.",
      },
      {
        value: "Securing access to AWS resources.",
      },
    ],
    tags: [],
  },
  {
    id: "335",
    question:
      "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
    options: [
      {
        value: "Business & Enterprise Support.",
      },
      {
        value: "Basic & Developer Support.",
        answer: 1,
      },
      {
        value: "Developer & Enterprise Support.",
      },
      {
        value: "Developer & Business Support.",
      },
    ],
    tags: [],
  },
  {
    id: "336",
    question: "Which of the following is NOT a benefit of using AWS Lambda?",
    options: [
      {
        value: "AWS Lambda runs code without provisioning or managing servers.",
      },
      {
        value: "AWS Lambda provides resizable compute capacity in the cloud.",
        answer: 1,
      },
      {
        value: "There is no charge when your AWS Lambda code is not running.",
      },
      {
        value: "AWS Lambda can be called directly from any mobile app.",
      },
    ],
    tags: [],
  },
  {
    id: "337",
    question: "How does AWS help customers achieve compliance in the cloud?",
    options: [
      {
        value:
          "It's not possible to meet regulatory compliance requirements in the Cloud.",
      },
      {
        value:
          "AWS applies the most common Cloud security standards, and is responsible for complying with customers' applicable laws and regulations.",
      },
      {
        value:
          "AWS has many common assurance certifications such as ISO 9001 and HIPAA.",
        answer: 1,
      },
      {
        value:
          "Many AWS services are assessed regularly to comply with local laws and regulations.",
      },
    ],
    tags: [],
  },
  {
    id: "338",
    question:
      "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
    options: [
      {
        value: "Your security team.",
      },
      {
        value: "Your development team.",
      },
      {
        value: "AWS.",
        answer: 1,
      },
      {
        value: "Your internal DevOps team.",
      },
    ],
    tags: [],
  },
  {
    id: "339",
    question:
      "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
    options: [
      {
        value: "Amazon Elastic Transcoder.",
        answer: 1,
      },
      {
        value: "Amazon Pinpoint.",
      },
      {
        value: "{AmazonS3.",
      },
      {
        value: "Amazon Rekognition.",
      },
    ],
    tags: [],
  },
  {
    id: "340",
    question:
      "What are the benefits of the AWS Organizations service? (Choose TWO)",
    options: [
      {
        value: "Control access to AWS services.",
        answer: 1,
      },
      {
        value:
          "Help organizations design and maintain an accelerated path to successful cloud adoption.",
      },
      {
        value: "Manage your organization's payment methods.",
      },
      {
        value:
          "Help organization achieve their desired business outcomes with AWS.",
      },
      {
        value: "Consolidate billing across multiple AWS accounts.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "341",
    question:
      "Which AWS service allows you to build a data warehouse in the cloud?",
    options: [
      {
        value: "AWS Shield.",
      },
      {
        value: "Amazon Redshift.",
        answer: 1,
      },
      {
        value: "Amazon RDS.",
      },
      {
        value: "Amazon Comprehend.",
      },
    ],
    tags: [],
  },
  {
    id: "342",
    question:
      "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
    options: [
      {
        value: "AWS Application Discovery service.",
      },
      {
        value: "Amazon DevPay.",
      },
      {
        value: "AWS Marketplace.",
        answer: 1,
      },
      {
        value: "Resource Groups.",
      },
    ],
    tags: [],
  },
  {
    id: "343",
    question:
      "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
    options: [
      {
        value: "AWS CodePipeline.",
      },
      {
        value: "AWS CodeCommit.",
        answer: 1,
      },
      {
        value: "AWS X-Ray.",
      },
      {
        value: "Amazon Inspector.",
      },
    ],
    tags: [],
  },
  {
    id: "344",
    question:
      "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
    options: [
      {
        value: "Amazon Cognito.",
      },
      {
        value: "AWS Systems Manager.",
      },
      {
        value: "AWS Cloud9.",
      },
      {
        value: "Amazon Route 53.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "345",
    question:
      "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
    options: [
      {
        value: "Federation.",
        answer: 1,
      },
      {
        value: "Access keys.",
      },
      {
        value: "IAM Permissions.",
      },
      {
        value: "WAF rules.",
      },
    ],
    tags: [],
  },
  {
    id: "346",
    question:
      "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
    options: [
      {
        value: "Awareness and Training.",
      },
      {
        value: "Communications controls.",
      },
      {
        value: "Data center security controls.",
      },
      {
        value: "Environmental controls.",
        answer: 1,
      },
      {
        value: "Resource Configuration Management.",
      },
    ],
    tags: [],
  },
  {
    id: "347",
    question:
      "What can you access by visiting the URL: http://status.aws.amazon.com?",
    options: [
      {
        value: "AWS Billing Dashboard.",
      },
      {
        value: "AWS Cost Dashboard.",
      },
      {
        value: "AWS Service Health Dashboard.",
        answer: 1,
      },
      {
        value: "AWS Security Dashboard.",
      },
    ],
    tags: [],
  },
  {
    id: "348",
    question:
      "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
    options: [
      {
        value: "Store media assets in the region closest to your end users.",
        answer: 1,
      },
      {
        value:
          "Store media assets on an additional EBS volume and increase the capacity of your server.",
      },
      {
        value: "Replicate media assets to at least two availability zones.",
      },
      {
        value:
          "Reduce the size of media assets using the Amazon Elastic Transcoder.",
      },
      {
        value:
          "Store media assets in $3 and use CloudFront to distribute these assets.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "349",
    question:
      "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
    options: [
      {
        value:
          "Use manual monitoring techniques to protect your AWS resources.",
      },
      {
        value:
          "Use IAM roles to grant temporary access instead of long-term credentials.",
        answer: 1,
      },
      {
        value: "Scale horizontally to protect from failures.",
      },
      {
        value: "Enable real-time traceability.",
        answer: 1,
      },
      {
        value: "Never store sensitive data in the cloud.",
      },
    ],
    tags: [],
  },
  {
    id: "350",
    question:
      "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
    options: [
      {
        value:
          "Use the AWS Pricing Calculator service to monitor the costs incurred by each department.",
      },
      {
        value: "Use Amazon Aurora to forecast AWS spending based on usage.",
      },
      {
        value:
          "Apply cost allocation tags to segment AWS costs by different e projects and departments.",
        answer: 1,
      },
      {
        value:
          "Configure AWS Price List API to receive billing updates for each department automatically.",
      },
    ],
    tags: [],
  },
  {
    id: "351",
    question:
      "What is the main benefit of attaching security groups to an Amazon RDS instance?",
    options: [
      {
        value: "Manages user access and encryption keys.",
      },
      {
        value:
          "Controls what IP address ranges can connect to your database instance.",
        answer: 1,
      },
      {
        value:
          "Deploys SSL/TLS certificates for use with your database instance.",
      },
      {
        value: "Distributes incoming traffic across multiple targets.",
      },
    ],
    tags: [],
  },
  {
    id: "352",
    question:
      "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
    options: [
      {
        value: "EC2 launch type.",
        answer: 1,
      },
      {
        value: "Fargate launch type.",
      },
      {
        value: "Lightsail launch type.",
      },
      {
        value: "Lambda launch type.",
      },
    ],
    tags: [],
  },
  {
    id: "353",
    question:
      "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
    options: [
      {
        value: "Try to remove unnecessary AWS accounts.",
      },
      {
        value:
          "Add the accounts to an AWS Organization and use Consolidated Billing.",
        answer: 1,
      },
      {
        value:
          "Track the AWS charges that are incurred by the member accounts.",
      },
      {
        value: "Enable AWS tiered-pricing before provisioning resources.",
      },
    ],
    tags: [
      "AWS OrganizationAWS Organization",
      "consolidated billing",
      "AWS billing",
    ],
  },
  {
    id: "354",
    question:
      "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
    options: [
      {
        value: "Network ACLs and Traffic Manager.",
      },
      {
        value: "Network ACLs and Subnets.",
      },
      {
        value: "Security Groups and Internet Gateways.",
      },
      {
        value: "Security Groups and Network ACLs.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "355",
    question: "What does the AWS 'Business' support plan provide? (Choose TWO)",
    options: [
      {
        value: "Access to the full set of Trusted Advisor checks.",
        answer: 1,
      },
      {
        value: "Support Concierge Service.",
      },
      {
        value:
          "Less than 15 minutes response-time support if your business critical system goes down.",
      },
      {
        value: "AWS Support API.",
        answer: 1,
      },
      {
        value: "Proactive Technical Account Management.",
      },
    ],
    tags: [],
  },
  {
    id: "356",
    question:
      "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
    options: [
      {
        value: "Amazon Simple Storage Service.",
      },
      {
        value: "AWS Elastic Beanstalk.",
        answer: 1,
      },
      {
        value: "AWS CodeCommit.",
      },
      {
        value: "Amazon Elastic File System.",
      },
    ],
    tags: [],
  },
  {
    id: "357",
    question: "Which statement is true in relation to security in AWS?",
    options: [
      {
        value: "AWS manages everything related to EC2 operating systems.",
      },
      {
        value:
          "AWS customers are responsible for patching any database software running on Amazon EC2.",
        answer: 1,
      },
      {
        value: "Server side encryption is the responsibility of AWS.",
      },
      {
        value: "AWS is responsible for the security of your application.",
      },
    ],
    tags: [],
  },
  {
    id: "358",
    question:
      "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
    options: [
      {
        value: "Improves Fault-Tolerance.",
        answer: 1,
      },
      {
        value: "Provides your business with a seamless remote accessibility.",
      },
      {
        value: "Prevents unauthorized users from getting into your network.",
      },
      {
        value: "Provides automatic data backups.",
      },
      {
        value: "Can be scaled manually in a shorter period of time.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "359",
    question: "Which statement is true regarding AWS pricing? (Choose TWO)",
    options: [
      {
        value:
          "With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee.",
        answer: 1,
      },
      {
        value:
          "You have no responsibility for third-party software license costs.",
      },
      {
        value:
          "You only pay for the individual services that you need with no long-term contracts.",
        answer: 1,
      },
      {
        value:
          "For some services, you have to pay a startup fee in order to get the service running.",
      },
      {
        value:
          "There are no reservations on AWS, you only pay for what you use.",
      },
    ],
    tags: ["pricing models"],
  },
  {
    id: "360",
    question:
      "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
    options: [
      {
        value: "AWS Control Tower.",
        answer: 1,
      },
      {
        value: "Amazon Macie.",
      },
      {
        value: "AWS Systems Manager Patch Manager.",
      },
      {
        value: "AWS Systems Manager Patch Manager AWS Security Hub.",
      },
    ],
    tags: ["AWS Organization", "multi-account", "AWS Control Tower"],
  },
  {
    id: "361",
    question:
      "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
    options: [
      {
        value: "Use CloudFront to monitor the CPU usage.",
      },
      {
        value:
          "Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.",
      },
      {
        value:
          "Use CloudWatch Alarms to monitor the CPUand alert when the CPU usage is >= 60%.",
        answer: 1,
      },
      {
        value: "Use SNS to menitor the utilization of the server.",
      },
    ],
    tags: [],
  },
  {
    id: "362",
    question:
      "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
    options: [
      {
        value: "Amazon EBS.",
        answer: 1,
      },
      {
        value: "Amazon RDS.",
      },
      {
        value: "You can't run a database inside an Amazon EC2 instance.",
      },
      {
        value: "Amazon DynamoDB.",
      },
    ],
    tags: [],
  },
  {
    id: "363",
    question:
      "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
    options: [
      {
        value: "Amazon CloudWatch.",
        answer: 1,
      },
      {
        value: "Amazon CloudSearch.",
      },
      {
        value: "Amazon Elastic MapReduce.",
      },
      {
        value: "Amazon CloudHSM.",
      },
    ],
    tags: [],
  },
  {
    id: "364",
    question:
      "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
    options: [
      {
        value: "Storage consumed.",
      },
      {
        value: "Number of requests to your functions.",
        answer: 1,
      },
      {
        value: "Number of volumes.",
      },
      {
        value: "Placement groups.",
      },
      {
        value: "Compute time consumed.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "365",
    question:
      "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
    options: [
      {
        value:
          "An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.",
      },
      {
        value:
          "An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.",
        answer: 1,
      },
      {
        value: "IAM users are more cost effective than IAM roles.",
      },
      {
        value:
          "Arole is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.",
      },
      {
        value:
          "An IAM user has temporary credentials associated withit, however a role has permanent credentials associated with it.",
      },
    ],
    tags: [],
  },
  {
    id: "366",
    question:
      "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
    options: [
      {
        value: "Deleting unused buckets.",
      },
      {
        value: "Using reservations.",
      },
      {
        value: "Deleting unnecessary snapshots.",
      },
      {
        value: "Changing the type of the volume.",
        answer: 1,
      },
      {
        value: "Distributing requests to multiple volumes.",
      },
    ],
    tags: [],
  },
  {
    id: "367",
    question:
      "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
    options: [
      {
        value:
          "Notifies AWS customers about abuse events once they are reported.",
      },
      {
        value:
          "Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.",
        answer: 1,
      },
      {
        value:
          "Helps AWS customers identify the root cause of potential security issues.",
      },
      {
        value:
          "Checks security groups for rules that allow unrestricted access to AWS. resources.",
      },
    ],
    tags: [],
  },
  {
    id: "368",
    question:
      "Which database service should you use if your application and data schema require 'joins' or complex transactions?",
    options: [
      {
        value: "Amazon RDS.",
        answer: 1,
      },
      {
        value: "AWS Outposts.",
      },
      {
        value: "Amazon DocumentDB.",
      },
      {
        value: "Amazon DynameDB.",
      },
    ],
    tags: [],
  },
  {
    id: "369",
    question:
      "Which of the following makes it easier for you to categorize, manage and filter your resources?",
    options: [
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "AWS Service Catalog.",
      },
      {
        value: "AWS Directory Service.",
      },
      {
        value: "AWS Tagging.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "370",
    question: "What should you consider when storing data in Amazon Glacier?",
    options: [
      {
        value: "Amazon Glacier only accepts data in a compressed format.",
      },
      {
        value:
          "Glacier can only be used to store frequently accessed data and data archives.",
      },
      {
        value: "Amazon Glacier does not provide immediate retrieval of data.",
        answer: 1,
      },
      {
        value: "Attach Glacier to an EC2 Instance to be able to store data.",
      },
    ],
    tags: [],
  },
  {
    id: "371",
    question:
      "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
    options: [
      {
        value: "Amazon EC2.",
      },
      {
        value: "AWS Batch.",
        answer: 1,
      },
      {
        value: "Lambda@Edge.",
      },
      {
        value: "AWS Fargate.",
      },
    ],
    tags: [],
  },
  {
    id: "372",
    question:
      "How can you increase your application's fault-tolerance while it is being hosted in AWS?",
    options: [
      {
        value: "Deploy your application across multiple EC2 instances.",
      },
      {
        value: "Deploy your application across multiple Availability Zones.",
        answer: 1,
      },
      {
        value:
          "Host your application on one powerful EC2 instance type instead of multiple smaller instances.",
      },
      {
        value:
          "Deploy the underlying application resources across multiple subnets.",
      },
    ],
    tags: [],
  },
  {
    id: "373",
    question:
      "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
    options: [
      {
        value: "Developer.",
      },
      {
        value: "Premium.",
      },
      {
        value: "Enterprise.",
        answer: 1,
      },
      {
        value: "Standard.",
      },
      {
        value: "Business.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "374",
    question:
      "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
    options: [
      {
        value: "IAM group.",
      },
      {
        value: "IAM user.",
        answer: 1,
      },
      {
        value: "IAM role.",
      },
      {
        value: "AWS account root user.",
        answer: 1,
      },
      {
        value: "TAM.",
      },
    ],
    tags: [],
  },
  {
    id: "375",
    question:
      "Which of the following is a benefit of the 'Loose Coupling' architecture principle?",
    options: [
      {
        value: "It eliminates the need for change management.",
      },
      {
        value: "It allows for Cross-Region Replication.",
      },
      {
        value:
          "It helps AWS customers reduce Privileged Access to AWS resources.",
      },
      {
        value:
          "It allows individual application compenents or services to be modified without affecting other components.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "376",
    question:
      "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
    options: [
      {
        value: "Amazon Elastic Block Store.",
      },
      {
        value: "AWS Storage Gateway.",
      },
      {
        value: "Amazon Elastic File System.",
        answer: 1,
      },
      {
        value: "S3.",
      },
    ],
    tags: [],
  },
  {
    id: "377",
    question:
      "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
    options: [
      {
        value: "On-premises.",
      },
      {
        value: "IaaS.",
      },
      {
        value: "PaaS.",
      },
      {
        value: "Cloud.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "378",
    question:
      "What are the benefits of the AWS Marketplace service? (Choose TWO)",
    options: [
      {
        value:
          "Protects customers by performing periodic security checks on listed products.",
        answer: 1,
      },
      {
        value: "Per-second billing.",
      },
      {
        value:
          "Provides cheaper options for purchasing Amazon EC2 on-demand instances.",
      },
      {
        value:
          "Provides flexible pricing options that suit most customer needs.",
        answer: 1,
      },
      {
        value:
          "Provides software solutions that run on AWS or any other Cloud vendor.",
      },
    ],
    tags: [],
  },
  {
    id: "379",
    question:
      "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
    options: [
      {
        value: "Elasticity.",
      },
      {
        value: "Durability.",
        answer: 1,
      },
      {
        value: "Traceability.",
      },
      {
        value: "Accessibility.",
      },
    ],
    tags: [],
  },
  {
    id: "380",
    question:
      "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can't afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
    options: [
      {
        value: "Savings Plans.",
      },
      {
        value: "Spot Instances.",
      },
      {
        value: "Reserved Instances.",
      },
      {
        value: "On-Demand Instances.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "381",
    question:
      "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
    options: [
      {
        value: "Amazon EFS.",
      },
      {
        value: "AWS Secrets Manager.",
      },
      {
        value: "AWS Systems Manager.",
      },
      {
        value: "Amazon CloudFront.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "382",
    question:
      "Which of the following services is used when encrypting EBS volumes?",
    options: [
      {
        value: "AWS WAF.",
      },
      {
        value: "AWS KMS.",
        answer: 1,
      },
      {
        value: "Amazon Macie.",
      },
      {
        value: "Amazon GuardDuty.",
      },
    ],
    tags: [],
  },
  {
    id: "383",
    question:
      "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
    options: [
      {
        value: "Download all the attached policies in a safe place.",
      },
      {
        value: "Delete all IAM accounts and recreate them.",
      },
      {
        value:
          "Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.",
      },
      {
        value: "Rotate all access keys.",
      },
      {
        value:
          "Change the email address and password of the root user account and enable MFA.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "384",
    question: "What is the Amazon ElastiCache service used for? (Choose TWO)",
    options: [
      {
        value: "Provide an in-memory data storage service.",
        answer: 1,
      },
      {
        value: "Reduce delivery costs using Edge Locations.",
      },
      {
        value: "Improve web application performance.",
        answer: 1,
      },
      {
        value:
          "Provide a Chef-compatible cache to speed up application response.",
      },
      {
        value: "Distribute requests to multiple instances.",
      },
    ],
    tags: [],
  },
  {
    id: "385",
    question:
      "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
    options: [
      {
        value: "Deploy your resources across multiple Availability Zones.",
      },
      {
        value: "Use Amazon EC2 Auto Scaling.",
        answer: 1,
      },
      {
        value: "Deploy your resources in another region.",
      },
      {
        value: "Use Elastic Load Balancing.",
      },
      {
        value: "Use Serverless Computing whenever possible.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "386",
    question:
      "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
    options: [
      {
        value: "They provide free capacity when testing your new applications.",
      },
      {
        value: "They are cheaper than all other EC2 options.",
      },
      {
        value:
          "They remove the need to buy “safety net” capacity to handle periodic traffic spikes.",
        answer: 1,
      },
      {
        value: "They only require 1-2 days for setup and configuration.",
      },
      {
        value:
          "You can increase or decrease your compute capacity depending on the demands of your application.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "387",
    question:
      "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
    options: [
      {
        value:
          "It is a data center designed to be completely isolated from other data centers in the same region.",
      },
      {
        value:
          "It is a collection of data centers distributed in multiple countries.",
      },
      {
        value: "It is a logically isolated network of the AWS Cloud.",
      },
      {
        value:
          "It is a distinct location within a region that is insulated from « failures in other Availability Zones.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "388",
    question:
      "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].",
    options: [
      {
        value: "Regions.",
        answer: 1,
      },
      {
        value: "Transportation devices.",
      },
      {
        value: "Support plans.",
      },
      {
        value: "Edge locations.",
      },
    ],
    tags: [],
  },
  {
    id: "389",
    question:
      "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company's responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
    options: [
      {
        value:
          "Start the migration process immediately as all AWS services are PCI compliant.",
      },
      {
        value:
          "Ensure that AWS services are configured properly to meetall PCI DSS standards.",
        answer: 1,
      },
      {
        value:
          "Restrict any access to cardholder data and create a policy that addresses information security for all personnel.",
        answer: 1,
      },
      {
        value:
          "Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.",
      },
      {
        value:
          "Ensure that all PCI DSS physical security requirements are met.",
      },
    ],
    tags: [],
  },
  {
    id: "390",
    question:
      "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
    options: [
      {
        value: "100 PetaBytes.",
      },
      {
        value: "Virtually unlimited storage.",
        answer: 1,
      },
      {
        value: "5TeraBytes.",
      },
      {
        value: "10 Exabytes.",
      },
    ],
    tags: [],
  },
  {
    id: "391",
    question:
      "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
    options: [
      {
        value: "Operational Excellence.",
      },
      {
        value: "Security.",
      },
      {
        value: "Performance Efficiency.",
        answer: 1,
      },
      {
        value: "Reliability.",
      },
    ],
    tags: [],
  },
  {
    id: "392",
    question:
      "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
    options: [
      {
        value: "Amazon Route 53.",
      },
      {
        value: "Amazon Connect.",
      },
      {
        value: "Amazon CloudFront.",
        answer: 1,
      },
      {
        value: "Amazon EC2.",
      },
    ],
    tags: [],
  },
  {
    id: "393",
    question:
      "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    options: [
      {
        value:
          "Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      },
      {
        value:
          "Request and wait for approval from the customer's internal security team, and then conduct testing.",
        answer: 1,
      },
      {
        value: "Notify AWS support, and then conduct testing immediately.",
      },
      {
        value:
          "Request and wait for approval from AWS support, and then conduct testing.",
      },
    ],
    tags: [],
  },
  {
    id: "394",
    question:
      "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    options: [
      {
        value: "AWS Cost Explorer.",
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Cost and Usage report.",
        answer: 1,
      },
      {
        value: "AWS Billing dashboard.",
      },
    ],
    tags: [],
  },
  {
    id: "395",
    question:
      "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
    options: [
      {
        value: "AWS Regions.",
      },
      {
        value: "Availability Zones.",
        answer: 1,
      },
      {
        value: "Edge locations.",
      },
      {
        value: "Amazon CloudFront.",
      },
    ],
    tags: [],
  },
  {
    id: "396",
    question:
      "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    options: [
      {
        value: "A minimum of one.",
      },
      {
        value: "A minimum of two.",
        answer: 1,
      },
      {
        value: "A minimum of three.",
      },
      {
        value: "A minimum of four or more.",
      },
    ],
    tags: [],
  },
  {
    id: "397",
    question: "The AWS Cloud's multiple Regions are an example of:",
    options: [
      {
        value: "Agility.",
      },
      {
        value: "Global infrastructure.",
        answer: 1,
      },
      {
        value: "Elasticity.",
      },
      {
        value: "Pay-as-you-go pricing.",
      },
    ],
    tags: [],
  },
  {
    id: "398",
    question:
      "Which AWS service can be used to manually launch instances based on resource requirements?",
    options: [
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon S3.",
      },
      {
        value: "Amazon EC2.",
        answer: 1,
      },
      {
        value: "Amazon ECS.",
      },
    ],
    tags: [],
  },
  {
    id: "399",
    question:
      "Which is a recommended pattern for designing a highly available architecture on AWS?",
    options: [
      {
        value: "Ensure that components have low-latency network connectivity.",
      },
      {
        value: "Run enough Amazon EC2 instances to operate at peak load.",
      },
      {
        value:
          "Ensure that the application is designed to accommodate failure of any single component.",
        answer: 1,
      },
      {
        value: "Use a monolithic application that handles all operations.",
      },
    ],
    tags: [],
  },
  {
    id: "400",
    question:
      "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
    options: [
      {
        value: "High availability.",
      },
      {
        value: "Shared security model.",
      },
      {
        value: "Elasticity.",
      },
      {
        value: "Pay-as-you-go pricing.",
        answer: 1,
      },
      {
        value: "Reliability.",
      },
    ],
    tags: [],
  },
  {
    id: "401",
    question:
      "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    options: [
      {
        value: "AWS Well-Architected Framework documentation.",
      },
      {
        value: "Amazon CloudFront.",
      },
      {
        value: "AWS CodeCommit.",
      },
      {
        value: "AWS Quick Start reference deployments.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "402",
    question:
      "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    options: [
      {
        value: "It simplifies relational database administration tasks.",
        answer: 1,
      },
      {
        value: "It provides 99.99999999999% reliability and durability.",
      },
      {
        value: "It automatically scales databases for loads.",
      },
      {
        value: "It enabled users to dynamically adjust CPU and RAM resources.",
      },
    ],
    tags: [],
  },
  {
    id: "403",
    question:
      "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    options: [
      {
        value: "Amazon EC2.",
        answer: 1,
      },
      {
        value: "Amazon Route 53.",
      },
      {
        value: "Amazon ElastiCache.",
      },
      {
        value: "Amazon DynamoDB.",
      },
    ],
    tags: [],
  },
  {
    id: "404",
    question:
      "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
    options: [
      {
        value:
          "Launch the instances across multiple Availability Zones in a single AWS Region.",
        answer: 1,
      },
      {
        value:
          "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      },
      {
        value:
          "Launch the instances in multiple AWS Regions but in the same Availability Zone.",
      },
      {
        value:
          "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.",
      },
    ],
    tags: [],
  },
  {
    id: "405",
    question:
      "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      {
        value: "A public and private key-pair.",
      },
      {
        value: "Amazon Inspector.",
      },
      {
        value: "AWS Identity and Access Management (IAM) policies.",
        answer: 1,
      },
      {
        value: "Security Groups.",
      },
    ],
    tags: [],
  },
  {
    id: "406",
    question:
      "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center?",
    options: [
      {
        value: "AWS VPN.",
        answer: 1,
      },
      {
        value: "Amazon Redshift.",
      },
      {
        value: "API Gateway.",
      },
      {
        value: "Amazon Direct Connect.",
      },
    ],
    tags: [],
  },
  {
    id: "407",
    question: "Which AWS service of feature can be used to monitor CPU usage?",
    options: [
      {
        value: "AWS CloudTrail.",
      },
      {
        value: "VPC Flow Logs.",
      },
      {
        value: "Amazon CloudWatch.",
        answer: 1,
      },
      {
        value: "AWSConfig.",
      },
    ],
    tags: [],
  },
  {
    id: "408",
    question:
      "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    options: [
      {
        value: "Granting access to individuals and services.",
      },
      {
        value: "Encrypting data in transit.",
      },
      {
        value: "Updating Amazon EC2 host firmware.",
        answer: 1,
      },
      {
        value: "Updating operating systems.",
      },
    ],
    tags: [],
  },
  {
    id: "409",
    question:
      "Which of the following security-related actions are available at no cost?",
    options: [
      {
        value: "Calling AWS Support.",
      },
      {
        value: "Contacting AWS Professional Services to request a workshop.",
      },
      {
        value: "Accessing forums, blogs, and whitepapers.",
        answer: 1,
      },
      {
        value: "Attending AWS classes at a local university.",
      },
    ],
    tags: [],
  },
  {
    id: "410",
    question:
      "Which storage service can be used as a low-cost option for hosting static websites?",
    options: [
      {
        value: "Amazon Glacier.",
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon Elastic File System (Amazon EFS).",
      },
      {
        value: "Amazon Simple Storage Service (Amazon S3).",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "411",
    question:
      "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
    options: [
      {
        value: "Application security.",
      },
      {
        value: "Edge location management.",
        answer: 1,
      },
      {
        value: "Patch management.",
      },
      {
        value: "Client-side data.",
      },
    ],
    tags: [],
  },
  {
    id: "412",
    question:
      "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    options: [
      {
        value: "Multiple Availability Zones.",
      },
      {
        value: "Performance efficiency.",
        answer: 1,
      },
      {
        value: "Security.",
        answer: 1,
      },
      {
        value: "Encryption usage.",
      },
      {
        value: "High availability.",
      },
    ],
    tags: [],
  },
  {
    id: "413",
    question:
      "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
    options: [
      {
        value: "AWS Trusted Advisor.",
        answer: 1,
      },
      {
        value: "Amazon Inspector.",
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "AWS CloudTrail.",
      },
    ],
    tags: [],
  },
  {
    id: "414",
    question:
      "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
    options: [
      {
        value: "Use manual monitoring.",
      },
      {
        value: "Use fixed servers.",
      },
      {
        value: "Implement loose coupling.",
        answer: 1,
      },
      {
        value: "Rely on individual components.",
      },
      {
        value: "Design for scalability.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "415",
    question:
      "When architecting cloud applications, which of the following are a key design principle?",
    options: [
      {
        value: "Use the largest instance possible.",
      },
      {
        value: "Provision capacity for peak load.",
      },
      {
        value: "Use the Scrum development process.",
      },
      {
        value: "Implement elasticity.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "416",
    question:
      "A company has deployed several relational databases on Amazon EC2 instances Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
    options: [
      {
        value:
          "Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
      },
      {
        value:
          "Enable automate patching for the instances using the Amazon RDS console.",
      },
      {
        value:
          "In AWS Config. configure a rule for the instances and the required patch level.",
      },
      {
        value:
          "Use AWS Systems Manager to automate database patching according to a schedule.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "417",
    question:
      "Which mechanism allows developers lo access AWS sendees from application code?",
    options: [
      {
        value: "AWS Software Development Kit.",
        answer: 1,
      },
      {
        value: "AWS Management Console.",
      },
      {
        value: "AWS CodePipeline.",
      },
      {
        value: "AWS Config.",
      },
    ],
    tags: [],
  },
  {
    id: "418",
    question:
      "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
    options: [
      {
        value: "Shared responsibility security model.",
        answer: 1,
      },
      {
        value: "Single tenancy.",
      },
      {
        value: "Elastic computing.",
      },
      {
        value: "Encryption.",
      },
    ],
    tags: [],
  },
  {
    id: "419",
    question: "Which of the following is a benefit of using the AWS Cloud?",
    options: [
      {
        value: "Permissive security removes the administrative burden.",
      },
      {
        value: "Ability to focus on revenue-generating activities.",
        answer: 1,
      },
      {
        value: "Control over cloud network hardware.",
      },
      {
        value: "Choice of specific cloud hardware vendors.",
      },
    ],
    tags: [],
  },
  {
    id: "420",
    question:
      "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
    options: [
      {
        value: "Fault Tolerance.",
        answer: 1,
      },
      {
        value: "Instance Usage.",
      },
      {
        value: "Infrastructure.",
      },
      {
        value: "Performance.",
        answer: 1,
      },
      {
        value: "Storage Capacity.",
      },
    ],
    tags: [],
  },
  {
    id: "421",
    question: "What is Amazon CloudWatch?",
    options: [
      {
        value:
          "A code repository with customizable build and team commit features.",
      },
      {
        value:
          "A metrics repository with customizable notification thresholds and channels.",
        answer: 1,
      },
      {
        value: "A security configuration repository with threat analytics.",
      },
      {
        value:
          "A rule repository of a web application firewall with automated vulnerability prevention features.",
      },
    ],
    tags: [],
  },
  {
    id: "422",
    question:
      "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Select TWO)",
    options: [
      {
        value:
          "Patching operating system components for Amazon Relational Database Server (Amazon RDS).",
      },
      {
        value: "Encrypting data on the client-side.",
        answer: 1,
      },
      {
        value: "Training the data center staff.",
      },
      {
        value: "Configuring Network Access Control Lists (ACL).",
        answer: 1,
      },
      {
        value: "Maintaining environmental controls within a data center.",
      },
    ],
    tags: [],
  },
  {
    id: "423",
    question:
      "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    options: [
      {
        value: "Physical controls.",
      },
      {
        value: "Patch management.",
        answer: 1,
      },
      {
        value: "Zone security.",
      },
      {
        value: "Data center auditing.",
      },
    ],
    tags: [],
  },
  {
    id: "424",
    question:
      "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
    options: [
      {
        value: "AWS Billing and Cost Management.",
        answer: 1,
      },
      {
        value: "Consolidated billing.",
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "Amazon GuickStght.",
      },
    ],
    tags: ["AWS Billing and Cost Management", "AWS billing"],
  },
  {
    id: "425",
    question:
      "How do customers benefit from Amazon's massive economies of scale?",
    options: [
      {
        value:
          "Periodic price reductions as the result of Amazon's operational efficiencies.",
      },
      {
        value: "New Amazon EC2 instance types providing the latest hardware.",
      },
      {
        value: "The ability to scale up and down when needed.",
        answer: 1,
      },
      {
        value:
          "Increased reliability in the underlying hardware of Amazon EC2 instances.",
      },
    ],
    tags: [],
  },
  {
    id: "426",
    question:
      "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    options: [
      {
        value: "Service control policies (SCPs).",
      },
      {
        value: "Consolidated billing.",
        answer: 1,
      },
      {
        value: "All Upfront Reserved Instances.",
      },
      {
        value: "AWS Cost Explorer.",
      },
    ],
    tags: ["consolidated billing", "AWS billing"],
  },
  {
    id: "427",
    question:
      "Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)",
    options: [
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon Connect.",
      },
      {
        value: "AWS Storage Gateway.",
        answer: 1,
      },
      {
        value: "Amazon CloudFront.",
      },
      {
        value: "AWS Direct Connect.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "428",
    question:
      "Which of the following services will automatically scale with an expected increase in web traffic?",
    options: [
      {
        value: "AWS CodePipeline.",
      },
      {
        value: "Elastic Load Balancing.",
        answer: 1,
      },
      {
        value: "Amazon EBS.",
      },
      {
        value: "AWS Direct Connect.",
      },
    ],
    tags: [],
  },
  {
    id: "429",
    question:
      "Which service provides a virtually unlimited amount of online highly durable object storage?",
    options: [
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon Elastic File System (Amazon EFS).",
      },
      {
        value: "Amazon Elastic Container Service (Amazon ECS).",
      },
      {
        value: "Amazon S3.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "430",
    question:
      "Which AWS feature should a customer leverage to achieve high availability of an application?",
    options: [
      {
        value: "AWS Direct Connect.",
      },
      {
        value: "Availability Zones.",
        answer: 1,
      },
      {
        value: "Data centers.",
      },
      {
        value: "Amazon Virtual Private Cloud (Amazon VPC).",
      },
    ],
    tags: [],
  },
  {
    id: "431",
    question:
      "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
    options: [
      {
        value: "AWS WAF.",
        answer: 1,
      },
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "AWS Direct Connect.",
        answer: 1,
      },
      {
        value: "AWS Organizations.",
      },
      {
        value: "Network ACLs.",
      },
    ],
    tags: [],
  },
  {
    id: "432",
    question:
      "Which of the following is a cloud architectural design principle?",
    options: [
      {
        value: "Scale up not out.",
      },
      {
        value: "Loosely couple components.",
        answer: 1,
      },
      {
        value: "Build monolithic systems.",
      },
      {
        value: "Use commercial database software.",
      },
    ],
    tags: [],
  },
  {
    id: "433",
    question:
      "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "AWS CloudTrail.",
        answer: 1,
      },
      {
        value: "AWS Config.",
      },
      {
        value: "AWS Health.",
      },
    ],
    tags: [],
  },
  {
    id: "434",
    question:
      "Where can AWS compliance and certification reports be downloaded?",
    options: [
      {
        value: "AWS Artifact.",
        answer: 1,
      },
      {
        value: "AWS Concierge.",
      },
      {
        value: "AWS Certificate Manager.",
      },
      {
        value: "AWS Trusted Advisor.",
      },
    ],
    tags: [],
  },
  {
    id: "435",
    question: "The financial benefits of using AWS are: (Select TWO)",
    options: [
      {
        value: "Reduced Total Cost of Ownership (TCO).",
        answer: 1,
      },
      {
        value: "Increased capital expenditure (capex).",
      },
      {
        value: "Reduced operational expenditure ( opex ).",
      },
      {
        value: "Deferred payment plans for startups.",
        answer: 1,
      },
      {
        value: "Business credit lines for stratups.",
      },
    ],
    tags: [],
  },
  {
    id: "436",
    question: "Which AWS service can serve a static website?",
    options: [
      {
        value: "Amazon S3.",
        answer: 1,
      },
      {
        value: "Amazon Route 53.",
      },
      {
        value: "Amazon QuickSight.",
      },
      {
        value: "AWS X-Ray.",
      },
    ],
    tags: [],
  },
  {
    id: "437",
    question:
      "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
    options: [
      {
        value:
          "Companies can deploy applications in multiple AWS Regions to reduce latency.",
        answer: 1,
      },
      {
        value:
          "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
      },
      {
        value:
          "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
        answer: 1,
      },
      {
        value:
          "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
      },
      {
        value:
          "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency.",
      },
    ],
    tags: [],
  },
  {
    id: "438",
    question:
      "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
    options: [
      {
        value: "Resource groups.",
      },
      {
        value: "Availability Zones.",
        answer: 1,
      },
      {
        value: "Security groups.",
      },
      {
        value: "Regions.",
      },
      {
        value: "Amazon Machine Images (AMIS).",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "439",
    question:
      "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    options: [
      {
        value: "Physical access controls.",
      },
      {
        value: "Data encryption.",
        answer: 1,
      },
      {
        value: "Secure disposal of storage devices.",
      },
      {
        value: "Environmental risk management.",
      },
    ],
    tags: [],
  },
  {
    id: "440",
    question:
      "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    options: [
      {
        value: "Use AWS Budgets on each account to pay only to budget.",
      },
      {
        value: "Contact AWS Support for a monthly bill.",
      },
      {
        value:
          "Create an AWS Organization from the payer account and invite the other accounts to join.",
        answer: 1,
      },
      {
        value:
          "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.",
      },
    ],
    tags: ["AWS Organization", "consolidated billing", "AWS billing"],
  },
  {
    id: "441",
    question:
      "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    options: [
      {
        value: "Project management.",
        answer: 1,
      },
      {
        value: "Antivirus software licensing.",
      },
      {
        value: "Data center security.",
      },
      {
        value: "Software development.",
      },
    ],
    tags: [],
  },
  {
    id: "442",
    question:
      "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    options: [
      {
        value:
          "They require the customer to monitor and replace failing instances.",
      },
      {
        value: "They have better performance than customer-managed services.",
      },
      {
        value: "They simplify patching and updating underlying OSs.",
        answer: 1,
      },
      {
        value:
          "They do not require the customer to optimize instance type or size selections.",
      },
    ],
    tags: [],
  },
  {
    id: "443",
    question:
      "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
    options: [
      {
        value: "Amazon Route 53.",
        answer: 1,
      },
      {
        value: "Virtual Private Gateway.",
        answer: 1,
      },
      {
        value: "Classic Load Balancer.",
      },
      {
        value: "Auto Scaling.",
      },
      {
        value: "Amazon CloudWatch default metrics.",
      },
    ],
    tags: [],
  },
  {
    id: "444",
    question: "Which statement best describes Elastic Load Balancing?",
    options: [
      {
        value: "It translates a domain name into an IP address using DNC.",
      },
      {
        value:
          "It distributes incoming application traffic across one or more Amazon EC2 instances.",
        answer: 1,
      },
      {
        value: "It collects metrics on connected Amazon EC2 instances.",
      },
      {
        value:
          "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.",
      },
    ],
    tags: [],
  },
  {
    id: "445",
    question:
      "Which of the following is a fast and reliable NoSQL database service?",
    options: [
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon RDS.",
      },
      {
        value: "Amazon DynamoDB.",
        answer: 1,
      },
      {
        value: "Amazon S3.",
      },
    ],
    tags: [],
  },
  {
    id: "446",
    question:
      "Which AWS service would you use to obtain compliance reports and certificates?",
    options: [
      {
        value: "AWS Artifact.",
        answer: 1,
      },
      {
        value: "AWS Lambda.",
      },
      {
        value: "Amazon Inspector.",
      },
      {
        value: "AWS Certificate Manager.",
      },
    ],
    tags: [],
  },
  {
    id: "447",
    question:
      "Which AWS services are defined as global instead of regional? (Select TWO)",
    options: [
      {
        value: "Amazon Route 53.",
        answer: 1,
      },
      {
        value: "Amazon EC2.",
      },
      {
        value: "Amazon S3.",
      },
      {
        value: "Amazon CloudFront.",
        answer: 1,
      },
      {
        value: "Amazon DynamoDB.",
      },
    ],
    tags: [],
  },
  {
    id: "448",
    question:
      "How would an AWS customer easily apply common access controls to a large set of users?",
    options: [
      {
        value: "Apply an IAM policy to an IAM group.",
        answer: 1,
      },
      {
        value: "Apply an IAM policy to an IAM role.",
      },
      {
        value:
          "Apply the same IAM policy to all IAM users with access to the same workload.",
      },
      {
        value: "Apply an IAM policy to an Amazon Cognito user pool.",
      },
    ],
    tags: [],
  },
  {
    id: "449",
    question:
      "Which of the following is an important architectural design principle when designing cloud applications?",
    options: [
      {
        value: "Use multiple Availability Zones.",
        answer: 1,
      },
      {
        value: "Use tightly coupled components.",
      },
      {
        value: "Use open source software.",
      },
      {
        value: "Provision extra capacity.",
      },
    ],
    tags: [],
  },
  {
    id: "450",
    question:
      "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    options: [
      {
        value: "AWS Server Migration Service.",
      },
      {
        value: "AWS Organizations.",
        answer: 1,
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Trusted Advisor.",
      },
    ],
    tags: [],
  },
  {
    id: "451",
    question:
      "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
    options: [
      {
        value: "AWS Concierge.",
      },
      {
        value: "AWS CloudFormation.",
        answer: 1,
      },
      {
        value: "Amazon Simple Storage Service (Amazon S3).",
      },
      {
        value: "Amazon EC2 Auto Scaling.",
      },
      {
        value: "AWS Management Console.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "452",
    question:
      "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
    options: [
      {
        value: "One-year, No Upfront, Standard RI pricing.",
      },
      {
        value: "One-year, All Upfront, Convertible RI pricing.",
      },
      {
        value: "Three-year, All Upfront, Standard RI pricing.",
        answer: 1,
      },
      {
        value: "Three-year, No Upfront, Convertible RI pricing.",
      },
    ],
    tags: ["pricing models"],
  },
  {
    id: "453",
    question:
      "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
    options: [
      {
        value: "Summaries by Amazon Simple Notification Service (Amazon SNS).",
      },
      {
        value: "Free Amazon Elasticsearch Service analytics.",
      },
      {
        value: "Provided at no charge.",
      },
      {
        value: "Real-time monitoring.",
      },
      {
        value: "Adjustable retention.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "454",
    question: "Which of the following is an AWS-managed compute service?",
    options: [
      {
        value: "Amazon SWF.",
      },
      {
        value: "Amazon EC2.",
        answer: 1,
      },
      {
        value: "AWS Lambda.",
      },
      {
        value: "Amazon Aurora.",
      },
    ],
    tags: [],
  },
  {
    id: "455",
    question:
      "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
    options: [
      {
        value: "Amazon Elastic Compute Cloud (Amazon EC2).",
      },
      {
        value: "AWS Lambda.",
        answer: 1,
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "AWS CodeCommit.",
      },
    ],
    tags: [],
  },
  {
    id: "456",
    question:
      "Which of the following is the customer's responsibility under the AWS shared responsibility model?",
    options: [
      {
        value: "Patching underlying infrastructure",
      },
      {
        value: "Physical security",
      },
      {
        value: "Patching Amazon EC2 instances",
        answer: 1,
      },
      {
        value: "Patching network infrastructure",
      },
    ],
    tags: [],
  },
  {
    id: "457",
    question:
      "According to the AWS shared responsibility model who is responsible for configuration management?",
    options: [
      {
        value: "It is solely the responsibility of the customer.",
      },
      {
        value: "It is solely the responsibility of AWS.",
      },
      {
        value: "It is shared between AWS and the customer.",
        answer: 1,
      },
      {
        value: "It is not part of the AWS shared responsibility model.",
      },
    ],
    tags: [],
  },
  {
    id: "458",
    question:
      "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    options: [
      {
        value: "Amazon GuardDuty.",
        answer: 1,
      },
      {
        value: "Amazon Macie.",
      },
      {
        value: "Amazon Inspector.",
      },
      {
        value: "AWS Shield.",
      },
    ],
    tags: [],
  },
  {
    id: "459",
    question:
      "Which of the following BEST describe the AWS pricing model? (Select TWO)",
    options: [
      {
        value: "Fixed-term.",
      },
      {
        value: "Pay-as-you-go.",
        answer: 1,
      },
      {
        value: "Colocation.",
      },
      {
        value: "Planned.",
      },
      {
        value: "Variable cost.",
        answer: 1,
      },
    ],
    tags: ["pricing models"],
  },
  {
    id: "460",
    question:
      "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
    options: [
      {
        value: "Ensuring that application data is encrypted at rest.",
        answer: 1,
      },
      {
        value: "Ensuring that AWS NTP servers are set to the correct time.",
      },
      {
        value:
          "Ensuring that users have received security training in the use of AWS services.",
        answer: 1,
      },
      {
        value: "Ensuring that access to data centers is restricted.",
      },
      {
        value: "Ensuring that hardware is disposed of properly.",
      },
    ],
    tags: [],
  },
  {
    id: "461",
    question:
      "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    options: [
      {
        value:
          "Create one global AWS account and move all AWS resources to tha account.",
      },
      {
        value: "Sign up for three years of Reserved Instance pricing up front.",
      },
      {
        value: "Use the consolidated billing feature from AWS Organizations.",
        answer: 1,
      },
      {
        value:
          "Sign up for the AWS Enterprise support plan to get volume discounts.",
      },
    ],
    tags: ["AWS Organization", "consolidated billing", "AWS billing"],
  },
  {
    id: "462",
    question:
      "Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?",
    options: [
      {
        value: "A Partial Upfront Reserved Instances for a 1-year term.",
      },
      {
        value: "All Upfront Reserved instances for a 1 year form.",
      },
      {
        value: "All Upfront Reserved Instances for a 3 year term.",
        answer: 1,
      },
      {
        value: "No Upfront Reserved Instances for a 3 year term.",
      },
    ],
    tags: ["pricing models"],
  },
  {
    id: "463",
    question:
      "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
    options: [
      {
        value: "Amazon Glacier.",
      },
      {
        value: "Amazon RDS.",
        answer: 1,
      },
      {
        value: "AWS Snowball.",
      },
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon EFS.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "464",
    question:
      "Which AWS service allows users to identify the changes made to a resource over time?",
    options: [
      {
        value: "Amazon Inspector.",
      },
      {
        value: "AWS Config.",
        answer: 1,
      },
      {
        value: "AWS Service Catalog.",
      },
      {
        value: "AWS IAM.",
      },
    ],
    tags: [],
  },
  {
    id: "465",
    question:
      "According to best practices, how should an application be designed to run in the AWS Cloud?",
    options: [
      {
        value: "Use tighly coupled components.",
      },
      {
        value: "Use loosely coupled components.",
        answer: 1,
      },
      {
        value: "Use infrequently coupled components.",
      },
      {
        value: "Use frequently coupled components.",
      },
    ],
    tags: [],
  },
  {
    id: "466",
    question:
      "Which benefits are included with the AWS Business Support plan? (Select TWO)",
    options: [
      {
        value: "24/7 assistance by way of live chat or a telephone call.",
        answer: 1,
      },
      {
        value: "Support from a dedicated AWS Technical Account Manager.",
      },
      {
        value: "An unlimited number of cases and contacts.",
        answer: 1,
      },
      {
        value:
          "15-minute response time for production system interruption cases.",
      },
      {
        value: "Annual operational reviews with AWS Solutions Architects.",
      },
    ],
    tags: [],
  },
  {
    id: "467",
    question:
      "Which of the following is an AWS managed Domain Name System (DNS) web service?",
    options: [
      {
        value: "Amazon Route 53.",
        answer: 1,
      },
      {
        value: "Amazon Neptune.",
      },
      {
        value: "Amazon SageMaker.",
      },
      {
        value: "Amazon Lightsail.",
      },
    ],
    tags: [],
  },
  {
    id: "468",
    question:
      "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
    options: [
      {
        value: "Dedicated Hosts.",
        answer: 1,
      },
      {
        value: "Dedicated Instances.",
      },
      {
        value: "Spot Instances.",
      },
      {
        value: "Reserved Instances.",
      },
    ],
    tags: [],
  },
  {
    id: "469",
    question:
      "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    options: [
      {
        value: "Dedicated RIs.",
      },
      {
        value: "Scheduled RIs.",
      },
      {
        value: "Convertible RIs.",
        answer: 1,
      },
      {
        value: "Standard RIs.",
      },
    ],
    tags: ["pricing models"],
  },
  {
    id: "470",
    question:
      "Which service is best for storing common database query results, which helps to alleviate database access load?",
    options: [
      {
        value: "Amazon Machine Learning.",
      },
      {
        value: "Amazon SQS.",
      },
      {
        value: "Amazon ElastiCache.",
        answer: 1,
      },
      {
        value: "Amazon EC2 Instance Store.",
      },
    ],
    tags: [],
  },
  {
    id: "471",
    question:
      "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
    options: [
      {
        value: "For non-production applications.",
        answer: 1,
      },
      {
        value: "For stateful workloads.",
      },
      {
        value: "For applications that cannot have interruptions.",
      },
      {
        value: "For fault-tolerant flexible applications.",
        answer: 1,
      },
      {
        value: "For sensitive database applications.",
      },
    ],
    tags: [],
  },
  {
    id: "472",
    question: "Which AWS tools assist with estimating costs? (Select three)",
    options: [
      {
        value: "Detailed billing report.",
      },
      {
        value: "Cost allocation tags.",
        answer: 1,
      },
      {
        value: "AWS Simple Monthly Calculator.",
        answer: 1,
      },
      {
        value: "AWS Total Cost of Ownership (TCO) Calculator.",
        answer: 1,
      },
      {
        value: "Cost Estimator.",
      },
    ],
    tags: [],
  },
  {
    id: "473",
    question:
      "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
    options: [
      {
        value: "Elastic Load Balancer.",
      },
      {
        value: "Amazon EC2 Auto Scaling.",
        answer: 1,
      },
      {
        value: "Amazon Route 53.",
      },
      {
        value: "Amazon CloudFront.",
      },
    ],
    tags: [],
  },
  {
    id: "474",
    question:
      "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
    options: [
      {
        value: "Enterprise.",
        answer: 1,
      },
      {
        value: "Business.",
      },
      {
        value: "Developer.",
      },
      {
        value: "Basic.",
      },
    ],
    tags: [],
  },
  {
    id: "475",
    question:
      "Access keys in AWS Identity and Access Management (IM1) are used to:",
    options: [
      {
        value: "Log in to the AWS Management Console.",
      },
      {
        value: "Make programmatic calls to AWS from AWS APIs.",
        answer: 1,
      },
      {
        value: "Log in to Amazon EC2 instances.",
      },
      {
        value: "Authenticate to AWS CodeCommit repositories.",
      },
    ],
    tags: [],
  },
  {
    id: "476",
    question:
      "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
    options: [
      {
        value: "AWS Glue.",
      },
      {
        value: "AWS Data Pipeline.",
      },
      {
        value: "Amazon CloudSearch.",
      },
      {
        value: "Amazon Athena.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "477",
    question: "How does AWS shorten the time to provision IT resources?",
    options: [
      {
        value:
          "It supplies an online IT ticketing platform for resource requests.",
      },
      {
        value: "It supports automatic code validation services.",
      },
      {
        value:
          "It provides the ability to programmatically provision existing resources.",
        answer: 1,
      },
      {
        value:
          "It automates the resource request process from a company's IT vendor list.",
      },
    ],
    tags: [],
  },
  {
    id: "478",
    question:
      "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
    options: [
      {
        value: "Amazon CloudFront.",
        answer: 1,
      },
      {
        value: "AWS Cloud9.",
      },
      {
        value: "AWS CloudTrail.",
      },
      {
        value: "AWS CloudHSM.",
      },
      {
        value: "Amazon CloudWatch.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "479",
    question:
      "Which of the following are characteristics of Amazon S3? (Select TWO)",
    options: [
      {
        value: "A global file system.",
      },
      {
        value: "An object store.",
        answer: 1,
      },
      {
        value: "A local file store.",
      },
      {
        value: "A network file system.",
      },
      {
        value: "A durable storage system.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "480",
    question:
      "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
    options: [
      {
        value: "AWS Budgets.",
      },
      {
        value: "Cost Explorer.",
      },
      {
        value: "AWS Total Cost of Ownership (TCO) Calculator.",
        answer: 1,
      },
      {
        value: "AWS Well-Architected Tool.",
      },
    ],
    tags: [],
  },
  {
    id: "481",
    question:
      "Which of the following services is in the category of AWS serverless platform?",
    options: [
      {
        value: "Amazon EMR.",
      },
      {
        value: "Elastic Load Balancing.",
      },
      {
        value: "AWS Lambda.",
        answer: 1,
      },
      {
        value: "AWS Mobile Hub.",
      },
    ],
    tags: [],
  },
  {
    id: "482",
    question:
      "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    options: [
      {
        value: "Cost allocation tags.",
        answer: 1,
      },
      {
        value: "Consolidated billing.",
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Marketplace.",
      },
    ],
    tags: [],
  },
  {
    id: "483",
    question:
      "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    options: [
      {
        value: "AWS Cost Explorer.",
      },
      {
        value: "AWS Trusted Advisor.",
        answer: 1,
      },
      {
        value: "Consolidated billing.",
      },
      {
        value: "Detailed billing.",
      },
    ],
    tags: [],
  },
  {
    id: "484",
    question:
      "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
    options: [
      {
        value: "Cloud-native.",
      },
      {
        value: "Partner network.",
      },
      {
        value: "Hybrid architecture.",
        answer: 1,
      },
      {
        value: "Infrastructure as a service.",
      },
    ],
    tags: [],
  },
  {
    id: "485",
    question:
      "What technology enables compute capacity to adjust as loads change?",
    options: [
      {
        value: "Load balancing.",
      },
      {
        value: "Automatic failover.",
      },
      {
        value: "Round robin.",
      },
      {
        value: "Auto Scaling.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "486",
    question: "Which AWS service is a managed NoSQL database?",
    options: [
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon DynamoDB.",
        answer: 1,
      },
      {
        value: "Amazon Aurora.",
      },
      {
        value: "Amazon RDS for ManaDB.",
      },
    ],
    tags: [],
  },
  {
    id: "487",
    question:
      "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
    options: [
      {
        value: "Data centers contain regions.",
      },
      {
        value: "Regions contain Availability Zones.",
        answer: 1,
      },
      {
        value: "Availability Zones contain edge locations.",
      },
      {
        value: "Edge locations contain regions.",
      },
    ],
    tags: [],
  },
  {
    id: "488",
    question:
      "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    options: [
      {
        value: "Using many instances in parallel.",
        answer: 1,
      },
      {
        value: "Using a single large instance during off-peak hours.",
      },
      {
        value: "Using dedicated hardware.",
      },
      {
        value: "Using a large GPU instance type.",
      },
    ],
    tags: [],
  },
  {
    id: "489",
    question:
      "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
    options: [
      {
        value: "Amazon EC2.",
      },
      {
        value: "Amazon Relational Database Service (Amazon RDS).",
        answer: 1,
      },
      {
        value: "Amazon Aurora.",
      },
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon S3.",
      },
    ],
    tags: [],
  },
  {
    id: "490",
    question:
      "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    options: [
      {
        value: "API keys.",
      },
      {
        value: "Access keys.",
        answer: 1,
      },
      {
        value: "User names/Passwords.",
      },
      {
        value: "SSH keys.",
      },
    ],
    tags: [],
  },
  {
    id: "491",
    question:
      "The user is fully responsible for which action when running workloads on AWS?",
    options: [
      {
        value: "Patching the infrastructure components.",
        answer: 1,
      },
      {
        value: "Maintaining the underlying infrastructure components.",
      },
      {
        value: "Maintaining physical and environmental controls.",
      },
      {
        value: "Implementing controls to route application traffic.",
      },
    ],
    tags: [],
  },
  {
    id: "492",
    question:
      "Which AWS support plan includes a dedicated Technical Account Manager?",
    options: [
      {
        value: "Developer.",
      },
      {
        value: "Enterprise.",
        answer: 1,
      },
      {
        value: "Business.",
      },
      {
        value: "Basic.",
      },
    ],
    tags: [],
  },
  {
    id: "493",
    question:
      "What time-savings advantage is offered with the use of Amazon Rekognition?",
    options: [
      {
        value: "Amazon Rekognition provides automatic watermarking of images.",
      },
      {
        value:
          "Amazon Rekognition provides automatic detection of objects appearing in pictures.",
        answer: 1,
      },
      {
        value:
          "Amazon Recognition provides the ability to resize millions of images automatically.",
      },
      {
        value:
          "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.",
      },
    ],
    tags: ["Amazon Rekognition", "Machine Learning"],
  },
  {
    id: "494",
    question:
      "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
    options: [
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon Redshift.",
      },
      {
        value: "AWS CloudTrail.",
      },
      {
        value: "AWS Lambda.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "495",
    question:
      "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    options: [
      {
        value: "AWS manages the data stored in Amazon RDS tables.",
      },
      {
        value: "AWS manages the maintenance of the operating system.",
      },
      {
        value: "AWS automatically scales up instance types on demand.",
        answer: 1,
      },
      {
        value: "AWS manages the database type.",
      },
    ],
    tags: [],
  },
  {
    id: "496",
    question:
      "A company's web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
    options: [
      {
        value:
          "Implementing elasticity enabling the application to scale up or scale down as demand changes.",
      },
      {
        value:
          "Enabling several EC2 instances to run in parallel to achieve better performance.",
      },
      {
        value:
          "Focusing on decoupling components by isolating them and ensuring individual components can function when other components.",
        answer: 1,
      },
      {
        value:
          "Doubling EC2 computing resources to increase system fault tolerance.",
      },
    ],
    tags: [],
  },
  {
    id: "497",
    question:
      "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    options: [
      {
        value: "AWS Partner Network Technology Partners.",
      },
      {
        value: "AWS Marketplace.",
      },
      {
        value: "AWS Partner Network Consulting Partners.",
        answer: 1,
      },
      {
        value: "AWS Service Catalog.",
      },
    ],
    tags: [],
  },
  {
    id: "498",
    question:
      "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    options: [
      {
        value: "Amazon Glacier.",
      },
      {
        value: "AWS Storage Gateway.",
      },
      {
        value: "Amazon S3.",
        answer: 1,
      },
      {
        value: "Amazon EBS.",
      },
    ],
    tags: [],
  },
  {
    id: "499",
    question:
      "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    options: [
      {
        value: "Implement automation.",
      },
      {
        value: "Design for agility.",
      },
      {
        value: "Design for failure.",
        answer: 1,
      },
      {
        value: "Implement elasticity.",
      },
    ],
    tags: [],
  },
  {
    id: "500",
    question:
      "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
    options: [
      {
        value: "AWS IAM.",
      },
      {
        value: "AWS Organizations.",
        answer: 1,
      },
      {
        value: "AWS Schema Conversion Tool.",
      },
      {
        value: "AWS Config.",
      },
    ],
    tags: [],
  },
  {
    id: "501",
    question:
      "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
    options: [
      {
        value: "By minimizing large capital expenditures.",
        answer: 1,
      },
      {
        value: "By having no responsibility for third-party license costs.",
      },
      {
        value: "By having no operational expenditures.",
      },
      {
        value: "By having AWS manage applications.",
      },
    ],
    tags: [],
  },
  {
    id: "502",
    question:
      "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
    options: [
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "AWS Online Tech Talks.",
        answer: 1,
      },
      {
        value: "AWS Blog.",
      },
      {
        value: "AWS Forums.",
      },
      {
        value: "AWS Classroom Training.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "503",
    question:
      "Which of the following will enhance the security of access to the AWS Management Console'? (Select TWO)",
    options: [
      {
        value: "AWS Secrets Manager.",
      },
      {
        value: "AWS Certificate Manager.",
      },
      {
        value: "AWS Multi-Factor Authentication (AWS MFA).",
        answer: 1,
      },
      {
        value: "Security groups.",
      },
      {
        value: "Password policies.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "504",
    question:
      "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
    options: [
      {
        value: "Amazon CloudFront distributions.",
      },
      {
        value: "Amazon Route 53.",
      },
      {
        value: "Security Groups.",
      },
      {
        value: "Subnets.",
        answer: 1,
      },
      {
        value: "Elastic Load Balancing.",
      },
    ],
    tags: [],
  },
  {
    id: "505",
    question: "For which auditing process does AWS have sole responsibility?",
    options: [
      {
        value: "AWS IAM policies.",
      },
      {
        value: "Physical security.",
        answer: 1,
      },
      {
        value: "Amazon S3 bucket policies.",
      },
      {
        value: "AWS CloudTrail Logs.",
      },
    ],
    tags: [],
  },
  {
    id: "506",
    question:
      "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
    options: [
      {
        value: "The ability to receive one bill for multiple accounts.",
        answer: 1,
      },
      {
        value: "Service limits increasing by default in all accounts.",
      },
      {
        value: "A fixed discount on the monthly bill.",
      },
      {
        value:
          "Potential volume discounts, as usage in all accounts is combined.",
        answer: 1,
      },
      {
        value:
          "The automatic extension of the master account's AWS support plan to all accounts.",
      },
    ],
    tags: ["AWS Organization", "consolidated billing", "AWS billing"],
  },
  {
    id: "507",
    question:
      "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
    options: [
      {
        value: "Patching databases software.",
        answer: 1,
      },
      {
        value: "Testing application releases.",
      },
      {
        value: "Backing up databases.",
        answer: 1,
      },
      {
        value: "Creating database schema.",
      },
      {
        value: "Running penetration tests.",
      },
    ],
    tags: [],
  },
  {
    id: "508",
    question:
      "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
    options: [
      {
        value: "Contact an AWS Account Manager to sign a new contract.",
      },
      {
        value: "Move an Availability Zone to the new Region.",
        answer: 1,
      },
      {
        value: "Begin deploying resources in the second Region.",
      },
      {
        value: "Download the AWS Management Console for the new Region.",
      },
    ],
    tags: [],
  },
  {
    id: "509",
    question:
      "Why is it beneficial to use Elastic Load Balancers with applications?",
    options: [
      {
        value: "They allow for the conversion from Application Load.",
      },
      {
        value: "Balancers to Classic Load Balancers.",
        answer: 1,
      },
      {
        value:
          "They are capable of handling constant changes in network traffic patterns.",
      },
      {
        value:
          "They automatically adjust capacity. They are provided at no charge to users.",
      },
    ],
    tags: [],
  },
  {
    id: "510",
    question:
      "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
    options: [
      {
        value: "Enterprise.",
      },
      {
        value: "Business.",
        answer: 1,
      },
      {
        value: "Developer",
      },
      {
        value: "Basic",
      },
    ],
    tags: [],
  },
  {
    id: "511",
    question:
      "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
    options: [
      {
        value: "Amazon S3.",
        answer: 1,
      },
      {
        value: "Amazon Glacier.",
      },
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon EC2 Instance Store.",
      },
    ],
    tags: [],
  },
  {
    id: "512",
    question:
      "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
    options: [
      {
        value: "AWS Enterprise Support.",
      },
      {
        value: "AWS Solutions Architects.",
      },
      {
        value: "AWS Professional Services.",
        answer: 1,
      },
      {
        value: "AWS Account Managers.",
      },
    ],
    tags: [],
  },
  {
    id: "513",
    question:
      "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?",
    options: [
      {
        value: "Basic.",
      },
      {
        value: "Developer.",
      },
      {
        value: "Business.",
        answer: 1,
      },
      {
        value: "Enterprise.",
      },
    ],
    tags: [],
  },
  {
    id: "514",
    question:
      "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
    options: [
      {
        value: "AWS Config.",
        answer: 1,
      },
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "Amazon CloudWatch.",
      },
      {
        value: "Amazon Inspector.",
      },
    ],
    tags: [],
  },
  {
    id: "515",
    question:
      "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
    options: [
      {
        value:
          "It identifies software vulnerabilities in applications running on AWS.",
      },
      {
        value:
          "It provides a list of cost optimization recommendations based on current AWS usage.",
        answer: 1,
      },
      {
        value:
          "It detects potential security vulnerabilities caused by permissions settings on account resources.",
        answer: 1,
      },
      {
        value:
          "It automatically corrects potential security issues caused by permissions settings on account resources.",
      },
      {
        value:
          "It provides proactive alerting whenever an Amazon EC2 instance has been compromised.",
      },
    ],
    tags: [],
  },
  {
    id: "516",
    question: "Which AWS managed service is used to host databases?",
    options: [
      {
        value: "AWS Batch.",
      },
      {
        value: "AWS Artifact.",
      },
      {
        value: "AWS Data Pipeline.",
      },
      {
        value: "Amazon RDS.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "517",
    question:
      "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
    options: [
      {
        value: "IAM group.",
      },
      {
        value: "IAM user.",
        answer: 1,
      },
      {
        value: "IAM role.",
      },
      {
        value: "IAM policy.",
      },
    ],
    tags: [],
  },
  {
    id: "518",
    question:
      "Under the shared responsibility model, which of the following is the customer responsible for?",
    options: [
      {
        value: "Ensuring that disk drives are wiped after use.",
      },
      {
        value: "Ensuring that firmware is updated on hardware devices.",
      },
      {
        value: "Ensuring that data is encrypted at rest.",
        answer: 1,
      },
      {
        value: "Ensuring that network cables are category six or higher.",
      },
    ],
    tags: [],
  },
  {
    id: "519",
    question:
      "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
    options: [
      {
        value: "Amazon S3.",
      },
      {
        value: "Amazon Glacier.",
      },
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon EFS.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "520",
    question:
      "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
    options: [
      {
        value: "An access key ID.",
        answer: 1,
      },
      {
        value: "A primary key.",
      },
      {
        value: "A secret access key.",
        answer: 1,
      },
      {
        value: "A user ID.",
      },
      {
        value: "A secondary key.",
      },
    ],
    tags: [],
  },
  {
    id: "521",
    question:
      "Which of the following is a shared control between the customer and AWS?",
    options: [
      {
        value: "Providing a key for Amazon S3 client-side encryption.",
      },
      {
        value: "Configuration of an Amazon EC2 instance.",
      },
      {
        value: "Environmental controls of physical AWS data centers.",
      },
      {
        value: "Awareness.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "522",
    question:
      "Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?",
    options: [
      {
        value: "Amazon EBS.",
      },
      {
        value: "Amazon EC2 instance store.",
        answer: 1,
      },
      {
        value: "Amazon EFS.",
      },
      {
        value: "Amazon S3.",
      },
    ],
    tags: [],
  },
  {
    id: "523",
    question:
      "Which of the following is an advantage of consolidated billing on AWS?",
    options: [
      {
        value: "Volume pricing qualification.",
        answer: 1,
      },
      {
        value: "Shared access permissions.",
      },
      {
        value: "Multiple bills per account.",
      },
      {
        value: "Eliminates the need for tagging.",
      },
    ],
    tags: ["AWS Organization", "consolidated billing", "AWS billing"],
  },
  {
    id: "524",
    question: "Which services are parts of the AWS serverless platform?",
    options: [
      {
        value: "Amazon EC2, Amazon S3, Amazon Athena.",
      },
      {
        value: "Amazon Kinesis, Amazon SQS, Amazon EMR.",
      },
      {
        value: "AWS Step Functions, Amazon DynamoDB, Amazon SNS.",
        answer: 1,
      },
      {
        value: "Amazon Athena, Amazon Cognito, Amazon EC2.",
      },
    ],
    tags: [],
  },
  {
    id: "525",
    question:
      "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
    options: [
      {
        value: "Spot Instances.",
      },
      {
        value: "Reserved Instances.",
      },
      {
        value: "Dedicated Hosts.",
        answer: 1,
      },
      {
        value: "On-Demand Instances.",
      },
    ],
    tags: ["pricing models"],
  },
  {
    id: "526",
    question:
      "Which of the following security measures protect access to an AWS account? (Select TWO)",
    options: [
      {
        value: "Enable AWS CloudTrail.",
      },
      {
        value: "Grant least privilege access to IAM users.",
        answer: 1,
      },
      {
        value: "Create one IAM user and share with many developers and users.",
      },
      {
        value: "Enable Amazon CloudFront.",
      },
      {
        value:
          "Activate multi-factor authentication (MFA) for privileged users.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "527",
    question:
      "Which AWS service provides the ability to manage infrastructure as code?",
    options: [
      {
        value: "AWS CodePipeline.",
      },
      {
        value: "AWS CodeDeploy.",
      },
      {
        value: "AWS Direct Connect.",
      },
      {
        value: "AWS CloudFormation.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "528",
    question:
      "What is an advantage of deploying an application across multiple Availability Zones?",
    options: [
      {
        value:
          "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
      },
      {
        value:
          "The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
        answer: 1,
      },
      {
        value:
          "There will be better coverage as Availability Zones are geographical^ distant and can serve a wider area.",
      },
      {
        value:
          "There will be decreased application latency that will improve the user experience.",
      },
    ],
    tags: [],
  },
  {
    id: "529",
    question:
      "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
    options: [
      {
        value: "Amazon Aurora.",
        answer: 1,
      },
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon ElastiCache.",
      },
    ],
    tags: [],
  },
  {
    id: "530",
    question:
      "Which of the following is an AWS Cloud architecture design principle?",
    options: [
      {
        value: "Implement single points of failure.",
      },
      {
        value: "Implement loose coupling.",
        answer: 1,
      },
      {
        value: "Implement monolithic design.",
      },
      {
        value: "Implement vertical scaling.",
      },
    ],
    tags: [],
  },
  {
    id: "531",
    question:
      "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
    options: [
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "AWS Support case.",
      },
      {
        value: "Concierge team.",
        answer: 1,
      },
      {
        value: "Amazon Connect.",
      },
    ],
    tags: ["Concierge team", "AWS Enterprise"],
  },
  {
    id: "532",
    question:
      "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
    options: [
      {
        value:
          "Moving from variable operational expense ( opex ) to upfront capital expense (capex).",
      },
      {
        value:
          "Moving from upfront capital expense (capex) to variable capital expense (capex).",
      },
      {
        value:
          "Moving from upfront capital expense (capex) to variable operational expense ( opex ).",
        answer: 1,
      },
      {
        value:
          "Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex ).",
      },
    ],
    tags: [],
  },
  {
    id: "533",
    question:
      "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
    options: [
      {
        value: "Dedicated Hosts",
        answer: 1,
      },
      {
        value: "Reserved Instances",
      },
      {
        value: "On-Demand Instances",
      },
      {
        value: "No Upfront Reserved Instances",
      },
    ],
    tags: [],
  },
  {
    id: "534",
    question:
      "Which AWS service should be used for long-term, low-cost storage of data backups?",
    options: [
      {
        value: "Amazon RDS.",
      },
      {
        value: "Amazon Glacier.",
        answer: 1,
      },
      {
        value: "AWS Snowball.",
      },
      {
        value: "AWS EBS.",
      },
    ],
    tags: [],
  },
  {
    id: "535",
    question:
      "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
    options: [
      {
        value: "Enterprise.",
      },
      {
        value: "Business.",
        answer: 1,
      },
      {
        value: "Developer.",
      },
      {
        value: "Basic.",
      },
    ],
    tags: [],
  },
  {
    id: "536",
    question:
      "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    options: [
      {
        value: "Reserved Instances.",
      },
      {
        value: "On-Demand.",
      },
      {
        value: "Dedicated Hosts.",
      },
      {
        value: "Spot Instances.",
        answer: 1,
      },
    ],
    tags: ["spot instances", "pricing models"],
  },
  {
    id: "537",
    question:
      "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
    options: [
      {
        value: "appGateway.",
      },
      {
        value: "Amazon S3.",
        answer: 1,
      },
      {
        value: "Amazon Elastic File System (EFS).",
      },
      {
        value: "Amazon Glacier.",
      },
      {
        value: "Amazom CloudFront.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "538",
    question: "What can AWS edge locations be used for? (Select TWO)",
    options: [
      {
        value: "Hosting applications.",
      },
      {
        value: "Delivering content closer to users.",
        answer: 1,
      },
      {
        value: "Running NoSQL database caching services.",
      },
      {
        value: "Reducing traffic on the server by caching responses.",
        answer: 1,
      },
      {
        value: "Sending notification messages to end users.",
      },
    ],
    tags: [],
  },
  {
    id: "539",
    question:
      "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
    options: [
      {
        value: "AWS Total Cost of Ownership (TCO) Calculator.",
        answer: 1,
      },
      {
        value: "Cost Explorer.",
      },
      {
        value: "AWS Budgets.",
      },
      {
        value: "AWS Migration Hub.",
      },
    ],
    tags: [],
  },
  {
    id: "540",
    question:
      "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
    options: [
      {
        value: "AWS Service Health Dashboard.",
      },
      {
        value: "AWS X-Ray.",
      },
      {
        value: "AWS Personal Health Dashboard.",
        answer: 1,
      },
      {
        value: "Amazon CloudWatch.",
      },
    ],
    tags: [],
  },
  {
    id: "541",
    question:
      "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
    options: [
      {
        value: "It allows the business to eliminate IT bills.",
      },
      {
        value:
          "It allows the business to put a server in each customer's data center.",
      },
      {
        value: "It allows the business to focus on business activities.",
        answer: 1,
      },
      {
        value: "It allows the business to leave servers unpatched.",
      },
    ],
    tags: [],
  },
  {
    id: "542",
    question:
      "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
    options: [
      {
        value: "AWS Senior Support Engineers.",
      },
      {
        value: "AWS Technical Account Managers.",
      },
      {
        value: "AWS Trusted Advisor.",
        answer: 1,
      },
      {
        value: "AWS Discussion Forums.",
      },
    ],
    tags: [],
  },
  {
    id: "543",
    question:
      "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
    options: [
      {
        value:
          "Deploy applications across multiple Availability Zones within an AWS Region.",
      },
      {
        value:
          "Use a hybrid cloud computing deployment model within the geographic area.",
      },
      {
        value: "Deploy applications across multiple AWS Regions.",
        answer: 1,
      },
      {
        value:
          "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.",
      },
    ],
    tags: [],
  },
  {
    id: "544",
    question:
      "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
    options: [
      {
        value: "Ensuring network connectivity from AWS to the internet.",
      },
      {
        value: "Patching and fixing flaws within the AWS Cloud infrastructure.",
      },
      {
        value: "Ensuring the physical security of cloud data centers.",
      },
      {
        value: "Ensuring Amazon EBS volumes are backed up.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "545",
    question: "In which scenario should Amazon EC2 Spot Instances be used?",
    options: [
      {
        value:
          "A company wants to move its main website to AWS from an on-premises web server.",
      },
      {
        value:
          "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
      },
      {
        value:
          "A company's heavily used legacy database is currently running on-premises.",
      },
      {
        value:
          "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "546",
    question:
      "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer's decision? (Select TWO)",
    options: [
      {
        value: "Reduced latency to users.",
        answer: 1,
      },
      {
        value: "The application's presentation in the local language.",
      },
      {
        value: "Data sovereignty compliance.",
        answer: 1,
      },
      {
        value: "Cooling costs in hotter climates.",
      },
      {
        value: "Proximity to the customer's office for on-site visits.",
      },
    ],
    tags: [],
  },
  {
    id: "547",
    question:
      "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
    options: [
      {
        value: "AWS Personal Health Dashboard.",
        answer: 1,
      },
      {
        value: "AWS Service Health Dashboard.",
      },
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "AWS Infrastructure Event Management.",
      },
    ],
    tags: [],
  },
  {
    id: "548",
    question:
      "Which disaster recovery scenario offers the lowest probability of down time?",
    options: [
      {
        value: "Backup and restore.",
      },
      {
        value: "Pilot light.",
      },
      {
        value: "Warm standby.",
      },
      {
        value: "Multi-site active-active.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "549",
    question: "Which service's PRIMARY purpose is software version control?",
    options: [
      {
        value: "Amazon CodeStar.",
      },
      {
        value: "AWS Command Line Interface (AWS CLI).",
      },
      {
        value: "Amazon Cognito.",
      },
      {
        value: "AWS CodeCommit.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "550",
    question:
      "How can a customer increase security to AWS account logons? (Select TWO)",
    options: [
      {
        value: "Configure AWS Certificate Manager",
      },
      {
        value: "Enable Multi-Factor Authentication (MFA)",
        answer: 1,
      },
      {
        value: "Use Amazon Cognito to manage access",
      },
      {
        value: "Configure a strong password policy",
        answer: 1,
      },
      {
        value: "Enable AWS Organizations",
      },
    ],
    tags: [],
  },
  {
    id: "551",
    question:
      "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    options: [
      {
        value: "Availability Zone",
        answer: 1,
      },
      {
        value: "Edge location",
      },
      {
        value: "Region",
      },
      {
        value: "Private networking",
      },
    ],
    tags: [],
  },
  {
    id: "552",
    question:
      "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    options: [
      {
        value: "The ability to bid for a lower hourly cost.",
      },
      {
        value: "Paying a daily rate regardless of time used.",
      },
      {
        value: "Paying only for time used.",
        answer: 1,
      },
      {
        value: "Pre-paying for instances and paying a lower hourly rate.",
      },
    ],
    tags: [],
  },
  {
    id: "553",
    question:
      "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
    options: [
      {
        value: "AWS Trusted Advisor.",
      },
      {
        value: "AWS Professional Services.",
        answer: 1,
      },
      {
        value: "AWS Systems Manager.",
      },
      {
        value: "AWS Partner Network (APN).",
        answer: 1,
      },
      {
        value: "AWS Secrets Manager.",
      },
    ],
    tags: [],
  },
  {
    id: "554",
    question: "A characteristic of edge locations is that they:",
    options: [
      {
        value: "Host Amazon EC2 instances closer to users.",
      },
      {
        value: "Help lower latency and improve performance for users.",
      },
      {
        value:
          "Cache frequently changing data without reaching the origin server.",
        answer: 1,
      },
      {
        value: "Refresh data changes daily.",
      },
    ],
    tags: [],
  },
  {
    id: "555",
    question:
      "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
    options: [
      {
        value: "Command line interface.",
        answer: 1,
      },
      {
        value: "On-premises.",
      },
      {
        value: "Software Development Kits.",
        answer: 1,
      },
      {
        value: "Software-as-a-service.",
      },
      {
        value: "Hybrid.",
      },
    ],
    tags: [],
  },
  {
    id: "556",
    question: "What is a value proposition of the AWS Cloud?",
    options: [
      {
        value: "AWS is responsible for security in the AWS Cloud.",
        answer: 1,
      },
      {
        value: "No long-term contract is required.",
      },
      {
        value: "Provision new servers in days.",
      },
      {
        value: "AWS manages user applications in the AWS Cloud.",
      },
    ],
    tags: [],
  },
  {
    id: "557",
    question:
      "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
    options: [
      {
        value: "Amazon EC2 Spot Instances.",
      },
      {
        value: "Amazon EC2 Dedicated Instances.",
      },
      {
        value: "Amazon EC2 On-Demand Instances.",
      },
      {
        value: "Amazon EC2 Reserved Instances.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "558",
    question:
      "Which AWS service is used to track record, and audit configuration changes made to AWS resources?",
    options: [
      {
        value: "AWS Shield.",
      },
      {
        value: "AWS Config.",
        answer: 1,
      },
      {
        value: "AWS IAM.",
      },
      {
        value: "Amazon Inspector.",
      },
    ],
    tags: [],
  },
  {
    id: "559",
    question:
      "Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
    options: [
      {
        value: "Fault tolerance.",
      },
      {
        value: "Global reach.",
        answer: 1,
      },
      {
        value: "Pay-as-you-go pricing.",
      },
      {
        value: "High availability.",
      },
    ],
    tags: [],
  },
  {
    id: "560",
    question:
      "How can one AWS account use Reserved Instances from another AWS account?",
    options: [
      {
        value: "By using Amazon EC2 Dedicated Instances.",
      },
      {
        value: "By using AWS Organizations consolidated billing.",
        answer: 1,
      },
      {
        value: "By using the AWS Cost Explorer tool.",
      },
      {
        value: "By using AWS Budgets.",
      },
    ],
    tags: ["AWS Organization", "consolidated billing", "AWS billing"],
  },
  {
    id: "561",
    question:
      "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
    options: [
      {
        value:
          "AWS automatically distributes the data globally for higher durability.",
      },
      {
        value: "AWS will take care of operating the application.",
      },
      {
        value: "AWS makes it easy to architect for high availability.",
        answer: 1,
      },
      {
        value: "AWS can easily accommodate application demand changes.",
        answer: 1,
      },
      {
        value: "AWS takes care of application security patching.",
      },
    ],
    tags: [],
  },
  {
    id: "562",
    question:
      "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    options: [
      {
        value: "Amazon RDS.",
      },
      {
        value: "Amazon EC2.",
        answer: 1,
      },
      {
        value: "Amazon ElastiCache.",
      },
      {
        value: "AWS Fargate.",
      },
    ],
    tags: [],
  },
  {
    id: "563",
    question:
      "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
    options: [
      {
        value: "Implementing Amazon Rekognition.",
      },
      {
        value: "Using AWS Shield-protected resources.",
      },
      {
        value: "Blocking access with Security Groups.",
      },
      {
        value: "Using Multi-Factor Authentication (MFA).",
        answer: 1,
      },
      {
        value: "Enforcing password strength and expiration.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "564",
    question:
      "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
    options: [
      {
        value: "Amazon Glacier",
      },
      {
        value: "AWS Snowball",
      },
      {
        value: "AWS Storage Gateway",
        answer: 1,
      },
      {
        value: "Amazon Elastic Block Storage (Amazon EBS)",
      },
    ],
    tags: [],
  },
  {
    id: "565",
    question:
      "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
    options: [
      {
        value: "AWS Marketplace.",
        answer: 1,
      },
      {
        value: "Amazon Lumberyard.",
      },
      {
        value: "AWS Artifact.",
      },
      {
        value: "Amazon CloudSearch.",
      },
    ],
    tags: [],
  },
  {
    id: "566",
    question:
      "Which of the following is a component of the AWS Global Infrastructure?",
    options: [
      {
        value: "Amazon Alexa.",
      },
      {
        value: "AWS Regions.",
        answer: 1,
      },
      {
        value: "Amazon Lightsail.",
      },
      {
        value: "AWS Organizations.",
      },
    ],
    tags: [],
  },
  {
    id: "567",
    question:
      "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
    options: [
      {
        value: "On-Demand Instances.",
      },
      {
        value: "Reserved Instances.",
      },
      {
        value: "Spot Instances.",
        answer: 1,
      },
      {
        value: "Convertible Reserved Instances.",
      },
    ],
    tags: ["spot instances", "pricing models"],
  },
  {
    id: "568",
    question:
      "A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
    options: [
      {
        value:
          "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated",
      },
      {
        value:
          "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC",
        answer: 1,
      },
      {
        value:
          "Use Amazon Athena to query data from the on-premises database servers",
      },
      {
        value:
          "Connect the company's on-premises data center to AWS using AWS Direct Connect",
      },
      {
        value:
          "Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers",
      },
    ],
    tags: [],
  },
  {
    id: "569",
    question:
      "A Cloud Practitioner must determine if any security groups in an AW account have been provisioned to allow unrestricted access for specific ports What is the SIMPLEST way to do this?",
    options: [
      {
        value:
          "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
      },
      {
        value: "Run AWS Trusted Advisor and review the findings.",
        answer: 1,
      },
      {
        value:
          "Open the AWS IAM console and check the inbound rule filters for open access.",
      },
      {
        value:
          "In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access.",
      },
    ],
    tags: [],
  },
  {
    id: "570",
    question:
      "Which of the following security-related services does AWS offer? (Select TWO)",
    options: [
      {
        value: "Multi-factor authentication physical tokens.",
      },
      {
        value: "AWS Trusted Advisor security checks.",
        answer: 1,
      },
      {
        value: "Data encryption.",
        answer: 1,
      },
      {
        value: "Automated penetration testing.",
      },
      {
        value: "Amazon S3 copyrighted content detection.",
      },
    ],
    tags: [],
  },
  {
    id: "571",
    question:
      "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
    options: [
      {
        value: "AWS WAF.",
        answer: 1,
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon EC2.",
      },
      {
        value: "Amazon CloudFront.",
        answer: 1,
      },
      {
        value: "Amazon Inspector.",
      },
    ],
    tags: [],
  },
  {
    id: "572",
    question:
      "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    options: [
      {
        value: "Amazon Elastic Block Store (Amazon EBS).",
      },
      {
        value: "Amazon Machine Image.",
        answer: 1,
      },
      {
        value: "Amazon EC2 Systems Manager.",
      },
      {
        value: "Amazon AppStream 2.0.",
      },
    ],
    tags: [],
  },
  {
    id: "573",
    question:
      "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    options: [
      {
        value: "Think parallel.",
      },
      {
        value: "Implement elasticity.",
        answer: 1,
      },
      {
        value: "Decouple your components.",
      },
      {
        value: "Design for failure.",
      },
    ],
    tags: [],
  },
  {
    id: "574",
    question:
      "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
    options: [
      {
        value:
          "Easy and fast deployment of applications in multiple Regions around the world.",
      },
      {
        value: "Security of the AWS Cloud.",
      },
      {
        value: "Elasticity of the AWS Cloud.",
        answer: 1,
      },
      {
        value: "Lower variable costs due to massive economies of scale.",
      },
    ],
    tags: [],
  },
  {
    id: "575",
    question: "What can users access from AWS Artifact?",
    options: [
      {
        value: "AWS security and compliance documents.",
        answer: 1,
      },
      {
        value:
          "A download of configuration management details for all AWS resources.",
      },
      {
        value: "Training materials for AWS services.",
      },
      {
        value:
          "A security assessment of the applications deployed in the AWS Cloud.",
      },
    ],
    tags: [],
  },
  {
    id: "576",
    question:
      "Compared with costs in traditional and virtualized data centers, AWS has:",
    options: [
      {
        value: "Greater variable costs and greater upfront costs.",
      },
      {
        value: "Fixed usage costs and lower upfront costs.",
      },
      {
        value: "Lower variable costs and greater upfront costs.",
      },
      {
        value: "Lower variable costs and lower upfront costs.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "577",
    question:
      "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
    options: [
      {
        value: "AWS Lambda.",
      },
      {
        value: "Amazon DynamoDB Accelerator.",
      },
      {
        value: "Amazon Route 53.",
      },
      {
        value: "Amazon CloudFront.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "578",
    question:
      "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    options: [
      {
        value:
          "They automatically add more instances across multiple AWS Regions based on global demand of the application.",
      },
      {
        value:
          "They automatically add or replace instances across multiple Availability Zones when the application needs it.",
        answer: 1,
      },
      {
        value:
          "They enable the application's stalk: content to reside closer to end users.",
      },
      {
        value:
          "They are able to distribute incoming requests across a tier of web server instances.",
      },
    ],
    tags: [],
  },
  {
    id: "579",
    question:
      "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      {
        value: "A public and private key-pair.",
      },
      {
        value: "Amazon Inspector.",
      },
      {
        value: "AWS Identity and Access Management (IAM) policies.",
        answer: 1,
      },
      {
        value: "Security Groups.",
      },
    ],
    tags: [],
  },
  {
    id: "580",
    question:
      "How should a customer forecast the future costs for running a new web application?",
    options: [
      {
        value: "Amazon Aurora Backtrack.",
      },
      {
        value: "Amazon CloudWatch Billing Alarms.",
      },
      {
        value: "AWS Simple Monthly Calculator.",
        answer: 1,
      },
      {
        value: "AWS Cost and Usage report.",
      },
    ],
    tags: [],
  },
  {
    id: "581",
    question:
      "Where are AWS compliance documents, such as an SOC 1 report, located?",
    options: [
      {
        value: "Amazon Inspector.",
      },
      {
        value: "AWS CloudTrail.",
      },
      {
        value: "AWS Artifact.",
        answer: 1,
      },
      {
        value: "AWS Certificate Manager.",
      },
    ],
    tags: [],
  },
  {
    id: "582",
    question: "Which of the following tasks is the responsibility of AWS?",
    options: [
      {
        value: "Encrypting client-side data.",
      },
      {
        value: "Configuring AWS Identity and Access Management (IAM) roles.",
      },
      {
        value: "Securing the Amazon EC2 hypervisor.",
        answer: 1,
      },
      {
        value: "Setting user password policies.",
      },
    ],
    tags: [],
  },
  {
    id: "583",
    question:
      "Under the shared responsibility model which of the following areas are the customer's responsibility? (Select TWO)",
    options: [
      {
        value: "Firmware upgrades of network infrastructure.",
      },
      {
        value: "Patching of operating systems.",
      },
      {
        value: "Patching of the underlying hypervisor.",
        answer: 1,
      },
      {
        value: "Physical security of data centers.",
      },
      {
        value: "Configuration of the security group.",
      },
    ],
    tags: [],
  },
  {
    id: "584",
    question:
      "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?",
    options: [
      {
        value: "Amazon Simple Storage Service (Amazon S3).",
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value: "Amazon Kinesis.",
      },
      {
        value: "Amazon Redshift.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "585",
    question:
      "Much AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
    options: [
      {
        value: "Amazon EBS.",
      },
      {
        value: "AWS Direct Connect.",
        answer: 1,
      },
      {
        value: "Amazon CloudFront.",
      },
      {
        value: "AWS Storage Gateway.",
        answer: 1,
      },
      {
        value: "Amazon Connect.",
      },
    ],
    tags: [],
  },
  {
    id: "586",
    question: "What are the advantages of the AWS Cloud (Select TWO)",
    options: [
      {
        value: "Fixed rate monthly cost.",
      },
      {
        value: "No need to guess capacity requirements.",
        answer: 1,
      },
      {
        value: "Increased speed to market.",
      },
      {
        value: "Increased upfront capital expenditure.",
        answer: 1,
      },
      {
        value: "Physical access to cloud data centers.",
      },
    ],
    tags: [],
  },
  {
    id: "587",
    question:
      "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
    options: [
      {
        value: "Users do not have to wait for infrastructure provisioning.",
        answer: 1,
      },
      {
        value:
          "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
      },
      {
        value:
          "AWS takes over application configuration management on behalf of users.",
      },
      {
        value: "Users do not need to address security and compliance issues.",
      },
    ],
    tags: [],
  },
  {
    id: "588",
    question:
      "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
    options: [
      {
        value: "AWS Elastic Beanstalk.",
      },
      {
        value: "AWS OpsWorks.",
      },
      {
        value: "AWS CodeDeploy.",
        answer: 1,
      },
      {
        value: "AWS Batch.",
      },
      {
        value: "AWS X-Ray.",
      },
    ],
    tags: [],
  },
  {
    id: "589",
    question: "What is an example of agility in the AWS Cloud?",
    options: [
      {
        value: "Access to multiple instance types.",
      },
      {
        value: "Access to managed services.",
      },
      {
        value: "Using Consolidated Billing to produce one bill.",
      },
      {
        value: "Decreased acquisition time for new compute resources.",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "590",
    question:
      "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    options: [
      {
        value: "Amazon Inspector.",
      },
      {
        value: "AWS Web Application Firewall (AWS WAF).",
        answer: 1,
      },
      {
        value: "Elastic Load Balancing (ELB).",
      },
      {
        value: "AWS Shield.",
      },
    ],
    tags: [],
  },
  {
    id: "591",
    question:
      "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
    options: [
      {
        value: "Amazon Redshift.",
      },
      {
        value: "Amazon DynamoDB.",
      },
      {
        value:
          "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.",
      },
      {
        value: "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS).",
        answer: 1,
      },
    ],
    tags: [],
  },
  {
    id: "592",
    question: "Which type of mirroring does SPAN technology perform?",
    options: [
      {
        value: "Remote mirroring over Layer 2.",
      },
      {
        value: "Remote mirroring over Layer 3.",
      },
      {
        value: "Local mirroring over Layer 2.",
        answer: 1,
      },
      {
        value: "Local mirroring over Layer 3.",
      },
    ],
    tags: [],
  },
  {
    id: "593",
    question:
      "Your customer wants to grant restricted proxy rights to their HR Department to act on behalf of employees belonging to their legal entity. How can you perform this requirement? There are 2 correct answers to this question.",
    options: [
      {
        value:
          "Use the Manage Permission Roles tool to grant proxy rights to the HR Department.",
      },
      {
        value:
          "Fill the PROXY column of the Basic Import template to match the requirements and import the file using the Import Employee Data tool.",
      },
      {
        value:
          "Use the Proxy Management tool to configure the requested proxy assignments.",
        answer: 1,
      },
      {
        value:
          "Fill the Basic Import template with the requested proxy configuration and import the file using the Import and Export Data tool.",
      },
    ],
    tags: [],
  },
  {
    id: "594",
    question:
      "Which two statements about configuring a traffic monitoring session are true? (Choose two)",
    options: [
      {
        value: "You can set a local VM as a traffic destination.",
      },
      {
        value:
          "You can have up to two active monitoring sessions simultaneously.",
        answer: 1,
      },
      {
        value: "An unlimited number of monitoring session can be stored.",
      },
      {
        value: "A newly created monitoring session is enabled by default.",
      },
      {
        value:
          "A destination port can also be a source port within the same session.",
      },
      {
        value:
          "A vHBA can be a source for either an Ethernet or Fibre Channel monitoring session, but not both.",
        answer: 1,
      },
    ],
    tags: [],
  },
];

export default questions;
