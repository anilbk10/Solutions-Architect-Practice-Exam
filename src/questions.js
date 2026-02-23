export const questions = [
    {
        id: 1,
        text: "A company is storing an access key with an access key ID and secret access key in a text file on a custom Amazon Machine Image (AMI). The company uses the access key to access Amazon DynamoDB tables from instances created from the AMI. The security team has mandated a more secure solution. Which solution will meet the security team's mandate?",
        options: [
            "Put the access key in an Amazon S3 bucket and retrieve the access key on boot from the instance.",
            "Pass the access key to the instances through instance user data.",
            "Obtain the access key from a key server launched in a private subnet.",
            "Create an IAM role with permissions to access the table and launch all instances with the new role."
        ],
        correct: [3],
        explanation: "IAM roles for EC2 instances allow applications running on the instance to access AWS resources without having to create and store any access keys. Any solution involving the creation of an access key then introduces the complexity of managing that secret.",
        focus: "IAM Roles",
        focusExplanation: "Understanding when to use IAM Roles instead of static access keys is fundamental for AWS security best practices. It's a common scenario for securing application access to AWS services, eliminating the risk of exposed credentials."
    },
    {
        id: 2,
        text: "A company is developing a highly available web application using stateless web servers. Which AWS services or features are suitable for storing session state data? (Select TWO.)",
        options: [
            "Amazon CloudWatch",
            "Amazon DynamoDB",
            "Elastic Load Balancing",
            "Amazon ElastiCache",
            "AWS Storage Gateway"
        ],
        correct: [1, 3],
        explanation: "Both DynamoDB and ElastiCache provide high-performance storage of key-value pairs. CloudWatch and Elastic Load Balancers are not storage services. Storage Gateway is a storage service, but it is a hybrid storage service that enables on-premises applications to use cloud storage.",
        multiSelect: true,
        focus: "Stateless Architecture / Session State",
        focusExplanation: "Modern, scalable applications are often designed to be stateless. Knowing which services (like DynamoDB or ElastiCache) can be used to manage session state externally is crucial for building highly available and fault-tolerant systems."
    },
    {
        id: 3,
        text: "Company salespeople upload their sales figures daily. A solutions architect needs a durable storage solution for these documents that also protects against users accidentally deleting important documents. Which action will protect against unintended user actions?",
        options: [
            "Store data in an Amazon Elastic Block Store (Amazon EBS) volume and create snapshots once a week.",
            "Store data in an Amazon S3 bucket and enable versioning.",
            "Store data in two Amazon S3 buckets in different AWS Regions.",
            "Store data in Amazon EC2 instance storage."
        ],
        correct: [1],
        explanation: "If a versioned object is deleted, then it can still be recovered by retrieving the final version. Response A would lose any changes committed since the previous snapshot. Storing the data in two S3 buckets would provide slightly more protection, but a user could still delete the object from both buckets. EC2 instance storage is ephemeral and should never be used for data requiring durability.",
        focus: "S3 Versioning for Durability",
        focusExplanation: "S3 Versioning is a key feature for data protection. It prevents accidental deletions and allows for recovery, which is a core concept for building durable and resilient systems on AWS. It's your primary safety net for object-level changes."
    },
    {
        id: 4,
        text: "An application requires a highly available relational database with an initial storage capacity of 8 TB. The database will grow by 8 GB every day. To support expected traffic, at least eight read replicas will be required to handle database reads. Which AWS service will meet these requirements?",
        options: [
            "Amazon DynamoDB",
            "Amazon S3",
            "Amazon Aurora",
            "Amazon Redshift"
        ],
        correct: [2],
        explanation: "Aurora is a relational database that will automatically scale to accommodate data growth. Amazon Redshift does not support read replicas and will not automatically scale. DynamoDB is a NoSQL service, not a relational database. Amazon S3 is object storage, not a relational database.",
        focus: "Managed Relational Databases (Aurora)",
        focusExplanation: "Choosing the right database service is critical. This question highlights Aurora's specific strengths: relational compatibility, high availability with read replicas, and auto-scaling storage, which are common requirements for enterprise applications."
    },
    {
        id: 5,
        text: "A solutions architect is designing a critical business application with a relational database that runs on an Amazon EC2 instance. It requires a single Amazon Elastic Block Store (Amazon EBS) volume that can support up to 32,000 IOPS. Which EBS volume type can meet the performance requirements of this application?",
        options: [
            "EBS Provisioned IOPS SSD (io1)",
            "EBS Throughput Optimized HDD (st1)",
            "EBS General Purpose SSD (gp2)",
            "EBS Cold HDD (sc1)"
        ],
        correct: [0],
        explanation: "EBS Provisioned IOPS SSD provides sustained performance for mission-critical low-latency workloads. EBS General Purpose SSD can provide bursts of performance up to 3,000 IOPS and have a maximum baseline performance of 16,000 IOPS. The two HDD options are lower cost, high throughput volumes.",
        focus: "EBS Volume Performance (IOPS)",
        focusExplanation: "Applications have different storage performance needs. Knowing the specific differences between EBS volume types, especially when to use Provisioned IOPS (io1/io2) for high-performance databases versus General Purpose (gp2/gp3), is essential for performance tuning and cost management."
    },
    {
        id: 6,
        text: "A web application allows users to upload orders to an Amazon S3 bucket. The resulting Amazon S3 events trigger an AWS Lambda function that inserts a message to an Amazon SQS queue. A single Amazon EC2 instance reads messages from the queue, processes them, and stores them in an Amazon DynamoDB table partitioned by unique order ID. Next month, traffic is expected to increase by a factor of 10 and a solutions architect is reviewing the architecture for possible scaling problems. Which component is MOST likely to need re-architecting to be able to scale to accommodate the new traffic?",
        options: [
            "Lambda function",
            "SQS queue",
            "EC2 instance",
            "DynamoDB table"
        ],
        correct: [2],
        explanation: "A single EC2 instance will not scale and is a single point of failure in the architecture. A much better solution would be to have EC2 instances in an Auto Scaling group across two Availability Zones read messages from the queue. The other responses are all managed services that can be configured to scale or will scale automatically.",
        focus: "Scalability & Single Points of Failure",
        focusExplanation: "Identifying and eliminating single points of failure is a pillar of the AWS Well-Architected Framework. Recognizing that a single EC2 instance cannot scale and is a vulnerability is a key architectural skill for building robust applications."
    },
    {
        id: 7,
        text: "An application saves its logs to an Amazon S3 bucket. A user wants to keep the logs for 1 month for troubleshooting purposes, and then purge the logs. What feature will enable this?",
        options: [
            "Adding a bucket policy to the S3 bucket",
            "Configuring lifecycle configuration rules for the S3 bucket",
            "Creating an IAM policy for the S3 bucket",
            "Enabling cross-origin resource sharing (CORS) on the S3 bucket"
        ],
        correct: [1],
        explanation: "Lifecycle configuration allows lifecycle management of objects in a bucket. The configuration is a set of one or more rules, where each rule defines an action for Amazon S3 to apply to a group of objects. Bucket policies and IAM define access to objects in an S3 bucket. CORS enables clients in one domain to interact with resources in a different domain.",
        focus: "S3 Lifecycle Policies",
        focusExplanation: "Automating data management is key for cost optimization and compliance. S3 Lifecycle Policies allow you to automatically transition objects to cheaper storage tiers or delete them after a certain period. This is a common and important operational task."
    },
    {
        id: 8,
        text: "An application running on Amazon EC2 instances processes sensitive information stored in Amazon S3. The information is accessed over the internet. The security team is concerned that the internet connectivity to Amazon S3 is a security risk. Which solution will resolve the security concern?",
        options: [
            "Access the data through an internet gateway.",
            "Access the data through a VPN connection.",
            "Access the data through a NAT gateway.",
            "Access the data through a VPC endpoint for Amazon S3."
        ],
        correct: [3],
        explanation: "VPC endpoints for Amazon S3 provide secure connections to S3 buckets that do not require a gateway or NAT instances. NAT gateways and internet gateways still route traffic over the internet to the public endpoint for Amazon S3. There is no way to connect to Amazon S3 using a VPN.",
        focus: "Private Connectivity to AWS Services (VPC Endpoints)",
        focusExplanation: "Securing traffic between your VPC and other AWS services is a common security requirement. VPC Endpoints provide a private, secure path that does not traverse the public internet, which is crucial for protecting sensitive data."
    },
    {
        id: 9,
        text: "A company is building an Amazon Redshift cluster in its shared services VPC. The cluster will host sensitive data. How can the company control which networks can access the cluster?",
        options: [
            "Run the cluster in a different VPC and connect through VPC peering.",
            "Create a database user inside the Amazon Redshift cluster for users on the network only.",
            "Define a cluster security group for the cluster that allows access from the allowed networks.",
            "Only allow access to networks that connect with the shared services network using VPN."
        ],
        correct: [2],
        explanation: "A security group can grant access to traffic from the allowed networks using the CIDR range for each network. VPC peering and VPN are connectivity services and cannot control traffic for security. Amazon Redshift user accounts address authentication and authorization at the user level and have no control over network traffic.",
        focus: "Network Security (Security Groups)",
        focusExplanation: "Security Groups act as a stateful firewall for your instances and resources. Understanding how they control inbound and outbound traffic at the resource level (as opposed to the subnet level with NACLs) is fundamental to AWS networking and security."
    },
    {
        id: 10,
        text: "A solutions architect is designing an online shopping application running in a VPC on Amazon EC2 instances behind an Application Load Balancer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. The application tier must read and write data to a customer-managed database cluster. There should be no access to the database from the internet, but the cluster must be able to obtain software patches from the internet. Which VPC design meets these requirements?",
        options: [
            "Public subnets for both the application tier and the database cluster",
            "Public subnets for the application tier and private subnets for the database cluster",
            "Public subnets for the application tier and NAT gateway, and private subnets for the database cluster",
            "Public subnets for the application tier, and private subnets for the database cluster and NAT gateway"
        ],
        correct: [2],
        explanation: "The online application must be in public subnets to allow access from clients' browsers. The database cluster must be in private subnets to meet the requirement that there be no access from the internet. A NAT gateway is required to give the database cluster the ability to download patches from the internet. NAT gateways must be deployed in public subnets.",
        focus: "VPC Architecture (NAT Gateway)",
        focusExplanation: "Designing a secure and functional VPC is a core skill. This scenario tests the classic public/private subnet design where private resources need outbound internet access (for updates, etc.) without being exposed to inbound traffic, which is the primary use case for a NAT Gateway."
    },
    {
        id: 11,
        text: "A company needs to store data for 7 years to meet regulatory requirements. The data is accessed frequently during the first month and rarely afterward. Which S3 storage class transition policy would be most cost-effective?",
        options: [
            "Transition from S3 Standard to S3 Glacier Deep Archive after 30 days.",
            "Transition from S3 Standard to S3 Intelligent-Tiering after 30 days.",
            "Transition from S3 Standard to S3 Standard-IA after 30 days, then to S3 Glacier Deep Archive after 90 days.",
            "Store directly in S3 Glacier and set a 7-year retention policy."
        ],
        correct: [2],
        explanation: "This approach is cost-effective. S3 Standard is for frequent access. S3 Standard-IA is for infrequent access. S3 Glacier Deep Archive is for long-term archiving. Transitioning follows the access pattern. S3 Intelligent-Tiering is good but this pattern is predictable, so direct lifecycle policies are better. Storing directly in Glacier is not ideal for the first month of frequent access. Transitioning straight to Deep Archive might be too soon if there's some infrequent access before archiving.",
        focus: "S3 Storage Classes & Cost Optimization",
        focusExplanation: "Matching data access patterns to the right S3 storage class is the most effective way to optimize storage costs. This requires understanding the trade-offs between retrieval time, retrieval cost, and storage cost for each tier (Standard, Standard-IA, Glacier, etc.)."
    },
    {
        id: 12,
        text: "A solutions architect is designing a multi-tier web application in a VPC. The web servers are in a public subnet, and the database servers are in a private subnet. The database servers need to download security patches from the internet. How can this be achieved without exposing the database servers to inbound traffic from the internet?",
        options: [
            "Attach an Internet Gateway to the private subnet.",
            "Use a NAT Gateway in the public subnet and route outbound traffic from the private subnet to the NAT Gateway.",
            "Assign Elastic IP addresses to the database servers.",
            "Configure a VPC peering connection with another VPC that has internet access."
        ],
        correct: [1],
        explanation: "A NAT Gateway allows instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances. An Internet Gateway provides two-way internet access and would expose the database servers. Elastic IPs make instances reachable from the internet. VPC peering is for connecting VPCs, not for providing internet access in this manner.",
        focus: "Private Subnet Outbound Internet (NAT Gateway)",
        focusExplanation: "This is a reinforcement of the NAT Gateway concept, a frequently tested topic. It's the critical component for allowing private instances to initiate outbound connections to the internet for tasks like downloading patches, while remaining secure from inbound connections."
    },
    {
        id: 13,
        text: "An application is deployed across multiple Availability Zones in an AWS Region. One of the Availability Zones fails. What AWS feature can help maintain application availability? (Select TWO.)",
        options: [
            "Elastic Load Balancer (ELB)",
            "EC2 Auto Scaling",
            "AWS Global Accelerator",
            "Amazon Route 53",
            "VPC Endpoints"
        ],
        correct: [0, 1],
        explanation: "An Elastic Load Balancer can distribute traffic to healthy instances in the remaining Availability Zones. EC2 Auto Scaling can launch new instances in the working Availability Zones to compensate for the lost instances. Route 53 and Global Accelerator operate at a higher level, often for multi-region availability. VPC Endpoints are for private connectivity within AWS.",
        multiSelect: true,
        focus: "High Availability & Fault Tolerance",
        focusExplanation: "Designing for failure is a key AWS principle. Elastic Load Balancing (ELB) and EC2 Auto Scaling are the fundamental building blocks for creating applications that are resilient to failures at the Availability Zone level."
    },
    {
        id: 14,
        text: "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity. Which solution meets these requirements?",
        options: [
            "Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.",
            "Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.",
            "Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.",
            "Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region."
        ],
        correct: [0],
        explanation: "S3 Transfer Acceleration is designed for fast, easy, and secure transfers of files over long distances between a client and an S3 bucket. Given the global sites and high-speed internet, this is the most direct and operationally simple solution.",
        focus: "Data Transfer (S3 Transfer Acceleration)",
        focusExplanation: "When moving large amounts of data over long geographical distances, network latency is often a bigger bottleneck than bandwidth. S3 Transfer Acceleration uses AWS's global edge network to speed up these uploads, making it the ideal solution for this scenario."
    },
            {
                id: 15,
                text: "A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture. What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?",
                options: [
                    "Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.",
                    "Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.",
                    "Use Amazon Athena directly with Amazon S3 to run the queries as needed.",
                    "Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed."
                ],
                correct: [2],
                explanation: "Amazon Athena is a serverless, interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. It requires no infrastructure setup and allows querying data in place, which perfectly matches the requirements of minimal changes and low operational overhead.",
                focus: "Serverless Querying (Amazon Athena)",
                focusExplanation: "For ad-hoc analysis of data already in S3, Athena is a powerful, cost-effective, and operationally simple tool. It shines by letting you query data 'in-place' without building complex ETL pipelines or managing data warehousing infrastructure."
            },
            {
                id: 16,
                text: "A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations. Which solution meets these requirements with the LEAST amount of operational overhead?",
                options: [
                    "Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.",
                    "Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.",
                    "Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.",
                    "Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy."
                ],
                correct: [0],
                explanation: "The `aws:PrincipalOrgID` global condition key is specifically designed to restrict access to resources to principals (users and roles) from accounts within a specific AWS Organization. This is the most direct and simple way to achieve the goal.",
                focus: "Centralized Access Control (AWS Organizations)",
                focusExplanation: "Managing permissions across many AWS accounts is complex. Using the `aws:PrincipalOrgID` condition key in a resource policy is the most efficient and scalable way to grant access to all principals within your entire AWS Organization without manually listing accounts."
            },
            {
                id: 17,
                text: "An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet. Which solution will provide private network connectivity to Amazon S3?",
                options: [
                    "Create a gateway VPC endpoint to the S3 bucket.",
                    "Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.",
                    "Create an instance profile on Amazon EC2 to allow S3 access.",
                    "Create an Amazon API Gateway API with a private link to access the S3 endpoint."
                ],
                correct: [0],
                explanation: "A gateway VPC endpoint for Amazon S3 allows instances in a VPC to privately access S3 without needing an internet gateway, NAT device, or VPN connection. Traffic between the VPC and S3 does not leave the Amazon network.",
                focus: "VPC Endpoints for S3",
                focusExplanation: "This revisits a key security concept. A Gateway VPC Endpoint is the specific, recommended technology to provide private, secure access to S3 and DynamoDB from within a VPC. It ensures traffic stays on the AWS private network."
            },
            {
                id: 18,
                text: "A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time. What should a solutions architect propose to ensure users see all of their documents at once?",
                options: [
                    "Copy the data so both EBS volumes contain all the documents",
                    "Configure the Application Load Balancer to direct a user to the server with the documents",
                    "Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS",
                    "Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server"
                ],
                correct: [2],
                explanation: "The problem describes a stateful application where data is tied to a specific instance's EBS volume. To solve this, a shared storage layer is needed. Amazon EFS provides a managed file system that can be mounted by multiple EC2 instances, creating a unified location for documents.",
                focus: "Shared File Systems (Amazon EFS)",
                focusExplanation: "When you scale a stateful application across multiple EC2 instances, you need a shared data layer. Amazon EFS provides a simple, managed NFS file system for exactly this purpose, allowing multiple instances to access and modify the same data concurrently."
            },
            {
                id: 19,
                text: "A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth. Which solution will meet these requirements?",
                options: [
                    "Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.",
                    "Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.",
                    "Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.",
                    "Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway."
                ],
                correct: [1],
                explanation: "For a large data transfer (70 TB) where network bandwidth is a concern and speed is critical, AWS Snowball Edge is the ideal solution. It avoids using the network for the large data transfer by physically shipping the data.",
                focus: "Large-Scale Data Migration (AWS Snowball)",
                focusExplanation: "For terabyte or petabyte-scale data transfers, physical transport is often faster and more cost-effective than transferring over the internet. AWS Snowball is the purpose-built service for these offline data migration scenarios."
            },
            {
                id: 20,
                text: "A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?",
                options: [
                    "Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.",
                    "Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.",
                    "Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.",
                    "Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SQS) subscriptions. Configure the consumer applications to process the messages from the queues."
                ],
                correct: [3],
                explanation: "This is a classic fan-out pattern for decoupling producers and consumers. Publishing a message to an SNS topic, which then pushes it to multiple SQS queues, allows many independent consumer applications to process the same message in parallel, providing high scalability and resilience.",
                focus: "Decoupling Applications (SNS & SQS)",
                focusExplanation: "The 'fan-out' pattern (using SNS to distribute messages to multiple SQS queues) is a powerful and common architectural pattern. It decouples the message producer from its consumers, allowing for scalability, resilience, and independent processing."
            },
            {
                id: 21,
                text: "A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability. How should a solutions architect design the architecture to meet these requirements?",
                options: [
                    "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.",
                    "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.",
                    "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.",
                    "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes."
                ],
                correct: [1],
                explanation: "This solution effectively decouples the job submission from the processing nodes using an SQS queue. Scaling the number of compute nodes based on the queue size (ApproximateNumberOfMessagesVisible) is a classic and highly effective pattern for processing variable workloads, ensuring that you have enough workers to handle the current load without being over-provisioned.",
                focus: "SQS Queue-based Scaling",
                focusExplanation: "For variable workloads, scaling based on a direct measure of demand, like the depth of an SQS queue, is a core architectural pattern. It ensures resources are added or removed precisely when needed, optimizing both cost and performance. It's a key example of event-driven scaling."
            },
            {
                id: 22,
                text: "A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed. The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues. Which solution will meet these requirements?",
                options: [
                    "Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.",
                    "Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.",
                    "Create an Amazon FSx for Windows File Server file system to extend the company's storage space.",
                    "Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days."
                ],
                correct: [1],
                explanation: "S3 File Gateway provides a seamless way to extend on-premises storage to Amazon S3. It presents a standard SMB file share to your on-premises network while storing the data in S3. The gateway automatically caches frequently accessed data locally for low-latency access. Combining this with an S3 Lifecycle policy to move older data to cheaper tiers like Glacier perfectly meets all requirements.",
                focus: "Hybrid Storage (S3 File Gateway)",
                focusExplanation: "S3 File Gateway is a key hybrid cloud service. It's designed to solve on-premises storage capacity issues by connecting local file-based applications to the virtually limitless storage of S3, while maintaining low-latency access for hot data through its local cache."
            },
            {
                id: 23,
                text: "A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received. Which solution will meet these requirements?",
                options: [
                    "Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.",
                    "Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.",
                    "Use an API Gateway authorizer to block any requests while the application processes an order.",
                    "Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing."
                ],
                correct: [1],
                explanation: "The key requirement is processing orders in the sequence they are received. Amazon SQS FIFO (First-In, First-Out) queues are designed specifically for this purpose. They guarantee that messages are processed in the exact order they are sent and provide exactly-once processing. Standard SQS queues offer high throughput but do not guarantee order.",
                focus: "SQS FIFO Queues",
                focusExplanation: "Understanding the difference between SQS Standard and SQS FIFO queues is critical. When a business process requires strict message ordering (e.g., financial transactions, user command logs), FIFO is the only choice. This is a common exam scenario testing this distinction."
            },
            {
                id: 24,
                text: "An application runs on an Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management. What should a solutions architect do to accomplish this goal?",
                options: [
                    "Use AWS Secrets Manager. Turn on automatic rotation.",
                    "Use AWS Systems Manager Parameter Store. Turn on automatic rotation.",
                    "Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.",
                    "Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume."
                ],
                correct: [0],
                explanation: "AWS Secrets Manager is specifically designed to manage the lifecycle of secrets like database credentials. It not only stores them securely but can also automatically rotate them without requiring code changes or manual intervention. This directly addresses the requirement to minimize operational overhead for credential management.",
                focus: "Credential Management (AWS Secrets Manager)",
                focusExplanation: "AWS Secrets Manager is the premier service for handling credentials. Its key differentiator from Parameter Store is its native ability to integrate with services like RDS and automatically rotate passwords, which is a critical security practice and a common exam topic."
            },
            {
                id: 25,
                text: "A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53. What should a solutions architect do to meet these requirements?",
                options: [
                    "Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.",
                    "Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the CloudFront distribution.",
                    "Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.",
                    "Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application."
                ],
                correct: [0],
                explanation: "Amazon CloudFront is the optimal solution for accelerating both static and dynamic content. By configuring a single CloudFront distribution with multiple origins (the S3 bucket for static assets and the Application Load Balancer for dynamic content), you can cache static content at the edge and accelerate dynamic requests over the AWS network. All traffic is then routed through CloudFront for improved performance.",
                focus: "Content Delivery (Amazon CloudFront)",
                focusExplanation: "CloudFront is AWS's CDN. A key skill is understanding how to use it with multiple origins to serve an entire application. It caches static content and accelerates dynamic content, making it the go-to service for improving global web application performance."
            },
            {
                id: 26,
                text: "A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.",
                    "Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.",
                    "Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.",
                    "Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets."
                ],
                correct: [0],
                explanation: "This scenario requires both credential rotation and multi-Region availability. AWS Secrets Manager is the only service listed that provides both features natively: scheduled rotation and the ability to replicate secrets to other Regions. This creates a resilient, automated solution with the least operational overhead.",
                focus: "Multi-Region Secrets Management",
                focusExplanation: "For global applications or disaster recovery setups, you need to manage resources across regions. Secrets Manager's ability to replicate and manage secrets in multiple regions is a key feature that simplifies building secure, resilient, multi-region architectures."
            },
            {
                id: 27,
                text: "A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance. The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability. Which solution will meet these requirements?",
                options: [
                    "Use Amazon Redshift with a single node for leader and compute functionality.",
                    "Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone.",
                    "Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.",
                    "Use Amazon ElastiCache for Memcached with EC2 Spot Instances."
                ],
                correct: [2],
                explanation: "This scenario is a perfect fit for Amazon Aurora. It's MySQL compatible, offers high availability through its Multi-AZ architecture, and most importantly, it supports Aurora Auto Scaling. This feature automatically adds or removes read replicas in response to changing workloads, which directly solves the problem of handling unpredictable read traffic with minimal operational overhead.",
                focus: "Database Read Scaling (Aurora Replicas & Auto Scaling)",
                focusExplanation: "For read-intensive database workloads, offloading queries to read replicas is a standard pattern. Aurora takes this a step further with Aurora Auto Scaling, which automatically manages the number of replicas for you. This is a key feature for building elastic, high-performance database tiers."
            },
            {
                id: 28,
                text: "A financial services company has developed its flagship application on AWS Cloud with data security requirements such that the encryption key must be stored in a custom application running on-premises. The company wants to oﬄoad the data storage as well as the encryption process to Amazon S3 but continue to use the existing encryption key. Which of the following Amazon S3 encryption options allows the company to leverage Amazon S3 for storing data with given constraints?",
                options: [
                    "Server-Side Encryption with Customer-Provided Keys (SSE-C)",
                    "Server-Side Encryption with Amazon S3 managed keys (SSE-S3)",
                    "Server-Side Encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS)",
                    "Client-Side Encryption with data encryption is done on the client-side before sending it to Amazon S3"
                ],
                correct: [0],
                explanation: "For the given use-case, the company wants to manage the encryption keys via its custom application and let Amazon S3 manage the encryption, therefore you must use Server-Side Encryption with Customer-Provided Keys (SSE-C).",
                focus: "S3 Encryption (SSE-C)",
                focusExplanation: "It's crucial to understand the different S3 encryption models. SSE-C is the specific solution for when a customer must manage their own encryption keys but wants to offload the encryption and decryption processes to AWS. You provide the key with each request, and S3 handles the rest."
            },
            {
                id: 29,
                text: "A junior DevOps engineer wants to change the default configuration for Amazon EBS volume termination. By default, the root volume of an Amazon EC2 instance for an EBS-backed AMI is deleted when the instance terminates. Which option below helps change this default behavior to ensure that the volume persists even after the instance terminates?",
                options: [
                    "Set the DeleteOnTermination attribute to false",
                    "Set the TerminateOnDelete attribute to false",
                    "Set the TerminateOnDelete attribute to true",
                    "Set the DeleteOnTermination attribute to true"
                ],
                correct: [0],
                explanation: "By default, the root volume for an AMI backed by Amazon EBS is deleted when the instance terminates. The default behavior can be changed to ensure that the volume persists after the instance terminates. To change the default behavior, set the DeleteOnTermination attribute to false using a block device mapping.",
                focus: "EBS Volume Termination Policy",
                focusExplanation: "The `DeleteOnTermination` attribute is a fundamental setting for EBS-backed instances that controls data persistence. Knowing how to modify this is essential for preventing accidental data loss of the root volume when an instance is terminated, which is a common operational task."
            },
            {
                id: 30,
                text: "An e-commerce application uses an Amazon Aurora Multi-AZ deployment for its database. While analyzing the performance metrics, the engineering team has found that the database reads are causing high input/output (I/O) and adding latency to the write requests against the database. As an AWS Certified Solutions Architect Associate, what would you recommend to separate the read requests from the write requests?",
                options: [
                    "Configure the application to read from the Multi-AZ standby instance",
                    "Set up a read replica and modify the application to use the appropriate endpoint",
                    "Provision another Amazon Aurora database and link it to the primary database as a read replica",
                    "Activate read-through caching on the Amazon Aurora database"
                ],
                correct: [1],
                explanation: "An Aurora DB cluster can have up to 15 Aurora Replicas. You can use the reader endpoint for read-only connections for your Aurora cluster. This endpoint uses a load-balancing mechanism to help your cluster handle a query-intensive workload. The reader endpoint load-balances connections to available Aurora Replicas in an Aurora DB cluster.",
                focus: "Aurora Read Replicas",
                focusExplanation: "For read-heavy database workloads, using read replicas is the standard pattern to scale read traffic and reduce the load on the primary write instance. Understanding that you connect to a special 'reader endpoint' to distribute this load across all available replicas is key to implementing this pattern correctly."
            },
            {
                id: 31,
                text: "An IT company has an Access Control Management (ACM) application that uses Amazon RDS for MySQL but is running into performance issues despite using Read Replicas. The company has branch oﬃces across the world, and it needs the solution to work on a global scale. Which of the following will you recommend as the MOST cost-effective and high-performance solution?",
                options: [
                    "Use Amazon Aurora Global Database to enable fast local reads with low latency in each region",
                    "Use Amazon DynamoDB Global Tables to provide fast, local, read and write performance in each region",
                    "Spin up Amazon EC2 instances in each AWS region, install MySQL databases and migrate the existing data into these new databases",
                    "Spin up a Amazon Redshift cluster in each AWS region. Migrate the existing data into Redshift clusters"
                ],
                correct: [0],
                explanation: "Amazon Aurora Global Database is designed for globally distributed applications, allowing a single Amazon Aurora database to span multiple AWS regions. It replicates your data with no impact on database performance, enables fast local reads with low latency in each region, and provides disaster recovery from region-wide outages.",
                focus: "Global Database (Aurora Global Database)",
                focusExplanation: "When an application needs fast, low-latency database reads for users across multiple continents, a standard regional database is not sufficient. Aurora Global Database is the purpose-built solution for this, providing a managed, high-performance, multi-region database with read replicas close to your global users."
            },
            {
                id: 32,
                text: "The engineering team at an e-commerce company is working on cost optimizations for Amazon Elastic Compute Cloud (Amazon EC2) instances. The team wants to manage the workload using a mix of on-demand and spot instances across multiple instance types. They would like to create an Auto Scaling group with a mix of these instances. Which of the following options would allow the engineering team to provision the instances for this use-case?",
                options: [
                    "You can only use a launch confguration to provision capacity across multiple instance types using both On-Demand Instances and Spot Instances to achieve the desired scale, performance, and cost",
                    "You can only use a launch template to provision capacity across multiple instance types using both On-Demand Instances and Spot Instances to achieve the desired scale, performance, and cost",
                    "You can neither use a launch confguration nor a launch template to provision capacity across multiple instance types using both On-Demand Instances and Spot Instances to achieve the desired scale, performance, and cost",
                    "You can use a launch confguration or a launch template to provision capacity across multiple instance types using both On-Demand Instances and Spot Instances to achieve the desired scale, performance, and cost"
                ],
                correct: [1],
                explanation: "A launch configuration is an older instance configuration template that does not support mixing instance types or purchase options. A launch template is the modern and more flexible replacement that is required to create an Auto Scaling group that provisions a mix of On-Demand and Spot Instances across various instance types.",
                focus: "Launch Templates vs. Launch Configurations",
                focusExplanation: "Launch templates are the modern successor to launch configurations and are required for advanced Auto Scaling group features. The ability to mix instance types and purchase options (On-Demand and Spot) is a key feature of launch templates, crucial for cost optimization and resilience."
            },
            {
                id: 33,
                text: "What is true about Amazon RDS Read Replicas encryption?",
                options: [
                    "If the master database is unencrypted, the read replicas can be either encrypted or unencrypted",
                    "If the master database is encrypted, the read replicas can be either encrypted or unencrypted",
                    "If the master database is unencrypted, the read replicas are encrypted",
                    "If the master database is encrypted, the read replicas are encrypted"
                ],
                correct: [3],
                explanation: "On a database instance running with Amazon RDS encryption, data stored at rest in the underlying storage is encrypted, as are its automated backups, read replicas, and snapshots. Encryption is inherited and cannot be removed from the replicas if the primary instance is encrypted.",
                focus: "RDS Encryption Inheritance",
                focusExplanation: "Understanding how encryption propagates in RDS is key for security. When a primary RDS instance is encrypted, all its associated components, including read replicas and snapshots, are mandatorily encrypted using the same key. You cannot create an unencrypted replica from an encrypted primary."
            },
            {
                id: 34,
                text: "A weather forecast agency collects key weather metrics across multiple cities in the US and sends this data in the form of key-value pairs to AWS Cloud at a one-minute frequency. As a solutions architect, which of the following AWS services would you use to build a solution for processing and then reliably storing this data with high availability? (Select TWO)",
                options: [
                    "AWS Lambda",
                    "Amazon RDS",
                    "Amazon ElastiCache",
                    "Amazon DynamoDB",
                    "Amazon Redshift"
                ],
                correct: [0, 3],
                multiSelect: true,
                explanation: "AWS Lambda is perfect for serverless, event-driven processing of incoming data. Amazon DynamoDB is a fully managed NoSQL database designed for high-performance, key-value data storage. Combining Lambda to process the data and DynamoDB to store it provides a highly available, scalable, and reliable solution for this use case.",
                focus: "Serverless Data Ingestion (Lambda & DynamoDB)",
                focusExplanation: "This combination represents a powerful and common pattern for IoT and event data processing. Lambda provides the serverless compute to handle individual data points, while DynamoDB offers a fast, scalable, and managed key-value store, making the entire architecture efficient and easy to manage."
            },
            {
                id: 35,
                text: "A developer has configured inbound traﬃc for the relevant ports in both the Security Group of the Amazon EC2 instance as well as the network access control list (network ACL) of the subnet for the Amazon EC2 instance. The developer is, however, unable to connect to the service running on the Amazon EC2 instance. As a solutions architect, how will you fix this issue?",
                options: [
                    "Network access control list (network ACL) are stateful, so allowing inbound tra[c to the necessary ports enables the connection. Security Groups are stateless, so you must allow both inbound and outbound tra[c",
                    "Rules associated with network access control list (network ACL) should never be modifed from command line. An attempt to modify rules from command line blocks the rule and results in an erratic behavior",
                    "Security Groups are stateful, so allowing inbound tra[c to the necessary ports enables the connection. Network access control list (network ACL) are stateless, so you must allow both inbound and outbound tra[c",
                    "IAM Role defned in the Security Group is different from the IAM Role that is given access in the network access control list (network ACL)"
                ],
                correct: [2],
                explanation: "Security Groups are stateful; if you allow inbound traffic, the return outbound traffic is automatically allowed. Network ACLs are stateless. You must explicitly allow both inbound and outbound traffic. For a connection to work, you must allow inbound traffic on the service port (e.g., 80) and also allow outbound traffic on the ephemeral port range (1024-65535) for the return traffic.",
                focus: "Security Groups (Stateful) vs. NACLs (Stateless)",
                focusExplanation: "The stateful vs. stateless nature of Security Groups and Network ACLs is a fundamental and frequently tested networking concept. Forgetting to add an outbound rule to a restrictive NACL to allow for return traffic is one of the most common connectivity issues in a VPC."
            },
            {
                id: 36,
                text: "The engineering team at a logistics company has noticed that the Auto Scaling group (ASG) is not terminating an unhealthy Amazon EC2 instance. As a Solutions Architect, which of the following options would you suggest to troubleshoot the issue? (Select THREE)",
                options: [
                    "The Amazon EC2 instance could be a spot instance type, which cannot be terminated by the Auto Scaling group (ASG)",
                    "The instance maybe in Impaired status",
                    "The instance has failed the Elastic Load Balancing (ELB) health check status",
                    "A user might have updated the confguration of the Auto Scaling group (ASG) and increased the minimum number of instances forcing ASG to keep all instances alive",
                    "The health check grace period for the instance has not expired",
                    "A custom health check might have failed. The Auto Scaling group (ASG) does not terminate instances that are set unhealthy by custom checks"
                ],
                correct: [1, 2, 4],
                multiSelect: true,
                explanation: "An ASG will not terminate an instance if: the instance has failed an EC2 status check (Impaired), it has failed an ELB health check, or it is still within its health check grace period. These are the primary health checks that ASGs use to determine an instance's health and whether to replace it.",
                focus: "Auto Scaling Health Checks",
                focusExplanation: "Troubleshooting why an ASG isn't replacing an instance requires understanding its health check sources. The ASG relies on signals from EC2 status checks and, if configured, ELB health checks. The health check grace period is also a common reason for delayed termination, as it gives an instance time to start up before being monitored."
            },
            {
                id: 37,
                text: "A developer has configured inbound traﬃc for the relevant ports in both the Security Group of the Amazon EC2 instance as well as the network access control list (network ACL) of the subnet for the Amazon EC2 instance. The developer is, however, unable to connect to the service running on the Amazon EC2 instance. As a solutions architect, how will you fix this issue?",
                options: [
                    "Network access control list (network ACL) are stateful, so allowing inbound tra[c to the necessary ports enables the connection. Security Groups are stateless, so you must allow both inbound and outbound tra[c",
                    "Rules associated with network access control list (network ACL) should never be modifed from command line. An attempt to modify rules from command line blocks the rule and results in an erratic behavior",
                    "Security Groups are stateful, so allowing inbound tra[c to the necessary ports enables the connection. Network access control list (network ACL) are stateless, so you must allow both inbound and outbound tra[c",
                    "IAM Role defned in the Security Group is different from the IAM Role that is given access in the network access control list (network ACL)"
                ],
                correct: [2],
                explanation: "Security Groups are stateful; if you allow inbound traffic, the return outbound traffic is automatically allowed. Network ACLs are stateless. You must explicitly allow both inbound and outbound traffic. For a connection to work, you must allow inbound traffic on the service port (e.g., 80) and also allow outbound traffic on the ephemeral port range (1024-65535) for the return traffic.",
                focus: "Security Groups (Stateful) vs. NACLs (Stateless)",
                focusExplanation: "The stateful vs. stateless nature of Security Groups and Network ACLs is a fundamental and frequently tested networking concept. Forgetting to add an outbound rule to a restrictive NACL to allow for return traffic is one of the most common connectivity issues in a VPC."
            },
            {
                id: 38,
                text: "A weather forecast agency collects key weather metrics across multiple cities in the US and sends this data in the form of key-value pairs to AWS Cloud at a one-minute frequency. As a solutions architect, which of the following AWS services would you use to build a solution for processing and then reliably storing this data with high availability? (Select TWO)",
                options: [
                    "AWS Lambda",
                    "Amazon RDS",
                    "Amazon ElastiCache",
                    "Amazon DynamoDB",
                    "Amazon Redshift"
                ],
                correct: [0, 3],
                multiSelect: true,
                explanation: "AWS Lambda is perfect for serverless, event-driven processing of incoming data. Amazon DynamoDB is a fully managed NoSQL database designed for high-performance, key-value data storage. Combining Lambda to process the data and DynamoDB to store it provides a highly available, scalable, and reliable solution for this use case.",
                focus: "Serverless Data Ingestion (Lambda & DynamoDB)",
                focusExplanation: "This combination represents a powerful and common pattern for IoT and event data processing. Lambda provides the serverless compute to handle individual data points, while DynamoDB offers a fast, scalable, and managed key-value store, making the entire architecture efficient and easy to manage."
            },
            {
                id: 39,
                text: "A developer needs to implement an AWS Lambda function in AWS account A that accesses an Amazon Simple Storage Service (Amazon S3) bucket in AWS account B. As a Solutions Architect, which of the following will you recommend to meet this requirement?",
                options: [
                    "The Amazon S3 bucket owner should make the bucket public so that it can be accessed by the AWS Lambda function in the other AWS account",
                    "Create an IAM role for the AWS Lambda function that grants access to the Amazon S3 bucket. Set the IAM role as the Lambda function's execution role and that would give the AWS Lambda function cross-account access to the Amazon S3 bucket",
                    "AWS Lambda cannot access resources across AWS accounts. Use Identity federation to work around this limitation of Lambda",
                    "Create an IAM role for the AWS Lambda function that grants access to the Amazon S3 bucket. Set the IAM role as the AWS Lambda function's execution role. Make sure that the bucket policy also grants access to the AWS Lambda function's execution role"
                ],
                correct: [3],
                explanation: "If the IAM role and the bucket are in different accounts, then you need to grant Amazon S3 permissions on both the IAM role and the bucket policy. The Lambda's execution role must have a policy allowing S3 actions, and the S3 bucket's policy must explicitly grant permission to that Lambda execution role's ARN.",
                focus: "Cross-Account IAM Access",
                focusExplanation: "Accessing resources in another AWS account requires a 'double handshake'. The identity trying to access the resource (the Lambda's IAM Role) needs permission, and the resource being accessed (the S3 bucket) must have a policy that explicitly trusts that identity. This is a fundamental concept for secure multi-account architectures."
            },
            {
                id: 40,
                text: "A media company has created an AWS Direct Connect connection for migrating its flagship application to the AWS Cloud. The on-premises application writes hundreds of video files into a mounted NFS file system daily. Post-migration, the company will host the application on an Amazon EC2 instance with a mounted Amazon Elastic File System (Amazon EFS) file system. Before the migration cutover, the company must build a process that will replicate the newly created on-premises video files to the Amazon EFS file system. Which of the following represents the MOST operationally eﬃcient way to meet this requirement?",
                options: [
                    "Confgure an AWS DataSync agent on the on-premises server that has access to the NFS fle system. Transfer data over the AWS Direct Connect connection to an AWS VPC peering endpoint for Amazon EFS by using a private VIF. Set up an AWS DataSync scheduled task to send the video fles to the Amazon EFS fle system every 24 hours",
                    "Confgure an AWS DataSync agent on the on-premises server that has access to the NFS fle system. Transfer data over the AWS Direct Connect connection to an Amazon S3 bucket by using public VIF. Set up an AWS Lambda function to process event notifcations from Amazon S3 and copy the video fles from Amazon S3 to the Amazon EFS fle system",
                    "Confgure an AWS DataSync agent on the on-premises server that has access to the NFS fle system. Transfer data over the AWS Direct Connect connection to an Amazon S3 bucket by using a VPC gateway endpoint for Amazon S3. Set up an AWS Lambda function to process event notifcations from Amazon S3 and copy the video fles from Amazon S3 to the Amazon EFS fle system",
                    "Confgure an AWS DataSync agent on the on-premises server that has access to the NFS fle system. Transfer data over the AWS Direct Connect connection to an AWS PrivateLink interface VPC endpoint for Amazon EFS by using a private VIF. Set up an AWS DataSync scheduled task to send the video fles to the Amazon EFS fle system every 24 hours"
                ],
                correct: [3],
                explanation: "AWS DataSync is the purpose-built service for migrating file data. To do this privately and securely, you use a private VIF on your Direct Connect connection to connect to a PrivateLink endpoint for the EFS service. This keeps all transfer traffic off the public internet. DataSync's built-in scheduling provides the required periodic replication.",
                focus: "Hybrid Data Transfer (DataSync & Direct Connect)",
                focusExplanation: "For ongoing replication between on-premises file systems and AWS file systems like EFS, DataSync is the most efficient tool. Understanding how to route this traffic privately over a Direct Connect link using a private VIF and a service endpoint is key to building secure hybrid data migration pipelines."
            },
            {
                id: 41,
                text: "A social media application is hosted on an Amazon EC2 fleet running behind an Application Load Balancer. The application traﬃc is fronted by an Amazon CloudFront distribution. The engineering team wants to decouple the user authentication process for the application, so that the application servers can just focus on the business logic. As a Solutions Architect, which of the following solutions would you recommend to the development team so that it requires minimal development effort?",
                options: [
                    "Use Amazon Cognito Authentication via Cognito User Pools for your Amazon CloudFront distribution",
                    "Use Amazon Cognito Authentication via Cognito User Pools for your Application Load Balancer",
                    "Use Amazon Cognito Authentication via Cognito Identity Pools for your Amazon CloudFront distribution",
                    "Use Amazon Cognito Authentication via Cognito Identity Pools for your Application Load Balancer"
                ],
                correct: [1],
                explanation: "Application Load Balancers (ALBs) can natively integrate with Amazon Cognito User Pools. This allows the ALB to handle the user authentication process before forwarding requests to the backend application servers. This is the solution with the minimal development effort, as it's a configuration change on the load balancer rather than requiring custom code.",
                focus: "Load Balancer Authentication (ALB + Cognito)",
                focusExplanation: "Offloading authentication to the infrastructure layer is a powerful pattern. The native integration between ALB and Cognito User Pools is a key feature that allows you to secure your applications with minimal code changes. It simplifies development by letting your application focus only on business logic."
            },
            {
                id: 42,
                text: "To improve the performance and security of the application, the engineering team at a company has created an Amazon CloudFront distribution with an Application Load Balancer as the custom origin. The team has also set up an AWS Web Application Firewall (AWS WAF) with Amazon CloudFront distribution. The security team at the company has noticed a surge in malicious attacks from a specific IP address to steal sensitive data stored on the Amazon EC2 instances. As a solutions architect, which of the following actions would you recommend to stop the attacks?",
                options: [
                    "Create a deny rule for the malicious IP in the Security Groups associated with each of the instances",
                    "Create an IP match condition in the AWS WAF to block the malicious IP address",
                    "Create a deny rule for the malicious IP in the network access control list (network ACL) associated with each of the instances",
                    "Create a ticket with AWS support to take action against the malicious IP"
                ],
                correct: [1],
                explanation: "AWS WAF is designed for this exact purpose. By creating an IP match condition and an associated rule in the WAF Web ACL attached to your CloudFront distribution, you can block requests from the malicious IP address at the edge, before they ever reach your application servers.",
                focus: "Edge Security (AWS WAF)",
                focusExplanation: "AWS WAF is the primary service for protecting web applications from common exploits and malicious traffic. Knowing how to use it to block traffic based on IP addresses, headers, or other request characteristics is a fundamental security skill. Applying WAF at the CloudFront edge is the most effective way to stop attacks early."
            },
            {
                id: 43,
                text: "You have multiple AWS accounts within a single AWS Region managed by AWS Organizations and you would like to ensure all Amazon EC2 instances in all these accounts can communicate privately. Which of the following solutions provides the capability at the CHEAPEST cost?",
                options: [
                    "Create a VPC peering connection between all virtual private cloud (VPCs)",
                    "Create a Private Link between all the Amazon EC2 instances",
                    "Create an AWS Transit Gateway and link all the virtual private cloud (VPCs) in all the accounts together",
                    "Create a virtual private cloud (VPC) in an account and share one or more of its subnets with the other accounts using Resource Access Manager"
                ],
                correct: [3],
                explanation: "AWS Resource Access Manager (RAM) allows you to share your subnets with other accounts within your AWS Organization. This means instances from different accounts can be launched into the same shared VPC, allowing them to communicate privately using private IPs without any complex routing. RAM itself is free, making this the most cost-effective solution.",
                focus: "VPC Sharing (Resource Access Manager)",
                focusExplanation: "For simple private communication within a multi-account organization, VPC sharing with RAM is often the cheapest and simplest solution. It avoids the cost and complexity of Transit Gateway or the mesh of connections required for VPC Peering, by allowing multiple accounts to reside in a single, centrally managed VPC."
            },
            {
                id: 44,
                text: "An IT company wants to optimize the costs incurred on its fleet of 100 Amazon EC2 instances for the next year. Based on historical analyses, the engineering team observed that 70 of these instances handle the compute services of its flagship application and need to be always available. The other 30 instances are used to handle batch jobs that can afford a delay in processing. As a solutions architect, which of the following would you recommend as the MOST cost-optimal solution?",
                options: [
                    "Purchase 70 reserved instances (RIs) and 30 spot instances",
                    "Purchase 70 on-demand instances and 30 spot instances",
                    "Purchase 70 on-demand instances and 30 reserved instances",
                    "Purchase 70 reserved instances and 30 on-demand instances"
                ],
                correct: [0],
                explanation: "For the stable, always-on workload of 70 instances, Reserved Instances (RIs) or a Savings Plan would provide the best discount for a 1-year commitment. For the batch jobs that are fault-tolerant and can be interrupted, Spot Instances offer the deepest discounts and are the most cost-effective choice.",
                focus: "EC2 Purchase Options",
                focusExplanation: "Matching the workload characteristics to the correct EC2 purchase option is a core cost optimization skill. Use Reserved Instances or Savings Plans for steady-state, predictable workloads, and use Spot Instances for fault-tolerant, interruptible workloads to achieve the best possible cost structure."
            },
            {
                id: 45,
                text: "A systems administrator has created a private hosted zone and associated it with a Virtual Private Cloud (VPC). However, the Domain Name System (DNS) queries for the private hosted zone remain unresolved. As a Solutions Architect, can you identify the Amazon Virtual Private Cloud (Amazon VPC) options to be configured in order to get the private hosted zone to work?",
                options: [
                    "Fix the Name server (NS) record and Start Of Authority (SOA) records that may have been created with wrong confgurations",
                    "Fix conjicts between your private hosted zone and any Resolver rule that routes tra[c to your network for the same domain name, as it results in ambiguity over the route to be taken",
                    "Remove any overlapping namespaces for the private and public hosted zones",
                    "Enable DNS hostnames and DNS resolution for private hosted zones"
                ],
                correct: [3],
                explanation: "For a private hosted zone to function correctly, the VPC it's associated with must have two key settings enabled: `enableDnsHostnames` and `enableDnsSupport`. If these are not enabled, the Amazon-provided DNS server within the VPC will not be able to resolve records from the private zone.",
                focus: "Private Hosted Zones & VPC DNS Settings",
                focusExplanation: "This is a common troubleshooting step for Route 53 private zones. The functionality of private DNS resolution is dependent on two specific VPC attributes (`enableDnsHostnames` and `enableDnsSupport`). Knowing to check these settings is crucial for resolving private DNS issues."
            },
            {
                id: 46,
                text: "Your company has a monthly big data workload, running for about 2 hours, which can be eﬃciently distributed across multiple servers of various sizes, with a variable number of CPUs. The solution for the workload should be able to withstand server failures. Which is the MOST cost-optimal solution for this workload?",
                options: [
                    "Run the workload on a Spot Fleet",
                    "Run the workload on Reserved Instances (RI)",
                    "Run the workload on Dedicated Hosts",
                    "Run the workload on Spot Instances"
                ],
                correct: [0],
                explanation: "A Spot Fleet is the ideal solution here. It allows you to request capacity across multiple instance types, sizes, and Availability Zones, automatically launching the instances from the cheapest Spot pools. This diversification makes the workload resilient to failures in a single Spot pool and is highly cost-effective.",
                focus: "Cost Optimization with Spot Fleet",
                focusExplanation: "While a single Spot Instance is cheap, a Spot Fleet is more powerful for distributed, fault-tolerant workloads. It allows you to define capacity needs across a diverse range of instances, which increases your chances of getting the capacity at the lowest price and makes your application more resilient to Spot interruptions."
            },
            {
                id: 47,
                text: "A startup has just developed a video backup service hosted on a fleet of Amazon EC2 instances. The Amazon EC2 instances are behind an Application Load Balancer and the instances are using Amazon Elastic Block Store (Amazon EBS) Volumes for storage. The service provides authenticated users the ability to upload videos that are then saved on the EBS volume attached to a given instance. On the first day of the beta launch, users start complaining that they can see only some of the videos in their uploaded videos backup. Every time the users log into the website, they claim to see a different subset of their uploaded videos. Which of the following is the MOST optimal solution to make sure that users can view all the uploaded videos? (Select TWO)",
                options: [
                    "Write a one time job to copy the videos from all Amazon EBS volumes to Amazon DynamoDB and then modify the application to use Amazon DynamoDB for storing the videos",
                    "Write a one time job to copy the videos from all Amazon EBS volumes to Amazon S3 Glacier Deep Archive and then modify the application to use Amazon S3 Glacier Deep Archive for storing the videos",
                    "Mount Amazon Elastic File System (Amazon EFS) on all Amazon EC2 instances. Write a one time job to copy the videos from all Amazon EBS volumes to Amazon EFS. Modify the application to use Amazon EFS for storing the videos",
                    "Write a one time job to copy the videos from all Amazon EBS volumes to Amazon S3 and then modify the application to use Amazon S3 standard for storing the videos",
                    "Write a one time job to copy the videos from all Amazon EBS volumes to Amazon RDS and then modify the application to use Amazon RDS for storing the videos"
                ],
                correct: [2, 3],
                multiSelect: true,
                explanation: "The problem is that each EC2 instance has its own separate EBS storage. To fix this, you need a shared storage layer accessible by all instances. Amazon EFS provides a managed file system that can be mounted by multiple EC2 instances, creating a unified location for documents.",
                focus: "Shared Storage for Scalability (EFS vs S3)",
                focusExplanation: "This is a classic problem when scaling a stateful application. EBS is tied to a single EC2 instance. When you scale to multiple instances behind a load balancer, you need a shared storage service so all instances see the same data. Amazon EFS provides a simple, managed NFS file system for exactly this purpose, allowing multiple instances to access and modify the same data concurrently."
            },
            {
                id: 48,
                text: "A cybersecurity company uses a fleet of Amazon EC2 instances to run a proprietary application. The infrastructure maintenance group at the company wants to be notified via an email whenever the CPU utilization for any of the Amazon EC2 instances breaches a certain threshold. Which of the following services would you use for building a solution with the LEAST amount of development effort? (Select two)",
                options: [
                    "AWS Lambda",
                    "Amazon Simple Queue Service (Amazon SQS)",
                    "Amazon CloudWatch",
                    "Amazon Simple Notifcation Service (Amazon SNS)",
                    "AWS Step Functions"
                ],
                correct: [2, 3],
                multiSelect: true,
                explanation: "This is the classic monitoring and notification pattern in AWS. You use Amazon CloudWatch to monitor metrics (like CPU Utilization) and create an Alarm that triggers when a threshold is breached. The action for the alarm is to publish a message to an Amazon SNS topic, which can then send an email to subscribed endpoints.",
                focus: "Monitoring and Alerting (CloudWatch + SNS)",
                focusExplanation: "The combination of CloudWatch Alarms and SNS Topics is the fundamental way to build alerting systems in AWS. CloudWatch watches the metrics, and SNS delivers the notifications. This pattern requires no custom code and is the most efficient way to get alerts for resource metrics."
            },
            {
                id: 49,
                text: "A company has many Amazon Virtual Private Cloud (Amazon VPC) in various accounts, that need to be connected in a star network with one another and connected with on-premises networks through AWS Direct Connect. What do you recommend?",
                options: [
                    "Virtual private gateway (VGW)",
                    "VPC Peering Connection",
                    "AWS Transit Gateway",
                    "AWS PrivateLink"
                ],
                correct: [2],
                explanation: "AWS Transit Gateway is designed for this exact scenario. It acts as a central hub (a cloud router) to connect multiple VPCs and on-premises networks (via Direct Connect or VPN) in a hub-and-spoke (star) topology. This simplifies network management significantly compared to a complex mesh of VPC peering connections.",
                focus: "Hub-and-Spoke Networking (Transit Gateway)",
                focusExplanation: "When you need to connect more than a few VPCs, or connect VPCs to on-premises networks, Transit Gateway is the modern, scalable solution. It simplifies network architecture by creating a central hub, avoiding the complex and costly management of numerous point-to-point connections."
            },
            {
                id: 50,
                text: "Your company has an on-premises Distributed File System Replication (DFSR) service to keep files synchronized on multiple Windows servers, and would like to migrate to AWS cloud. What do you recommend as a replacement for the DFSR?",
                options: [
                    "Amazon FSx for Lustre",
                    "Amazon Elastic File System (Amazon EFS)",
                    "Amazon FSx for Windows File Server",
                    "Amazon Simple Storage Service (Amazon S3)"
                ],
                correct: [2],
                explanation: "Amazon FSx for Windows File Server provides a fully managed native Windows file system. It supports the SMB protocol and features like Microsoft Active Directory integration and Distributed File System (DFS), making it the direct, like-for-like replacement for an on-premises Windows Server with DFSR.",
                focus: "Managed Windows File System (FSx for Windows)",
                focusExplanation: "When migrating Windows-based file workloads, it's important to choose the service that provides the most compatibility. Amazon FSx for Windows is specifically designed to be a native Windows file system in the cloud, offering features that Windows administrators expect, making the migration seamless."
            },
            {
                id: 51,
                text: "A retail company wants to rollout and test a blue-green deployment for its global application in the next 48 hours. Most of the customers use mobile phones which are prone to Domain Name System (DNS) caching. The company has only two days left for the annual Thanksgiving sale to commence. As a Solutions Architect, which of the following options would you recommend to test the deployment on as many users as possible in the given time frame?",
                options: [
                    "Use Amazon Route 53 weighted routing to spread tra[c across different deployments",
                    "Use AWS CodeDeploy deployment options to choose the right deployment",
                    "Use Elastic Load Balancing (ELB) to distribute tra[c across deployments",
                    "Use AWS Global Accelerator to distribute a portion of tra[c to a particular deployment"
                ],
                correct: [3],
                explanation: "AWS Global Accelerator gives you static IP addresses that act as a fixed entry point. You can shift traffic between different endpoints (like load balancers for blue and green environments) behind the accelerator instantly without relying on DNS changes. This avoids issues with DNS caching, making it ideal for rapid and precise traffic shifting for blue-green deployments.",
                focus: "Global Traffic Management (AWS Global Accelerator)",
                focusExplanation: "While Route 53 is great for DNS-based routing, Global Accelerator is better for use cases that require instant traffic shifting without DNS propagation delays. Its ability to control traffic flow at the IP level makes it superior for critical operations like blue-green deployments, especially when client DNS caching is a concern."
            },
            {
                id: 52,
                text: "An IT company is working on client engagement to build a real-time data analytics tool for the Internet of Things (IoT) data. The IoT data is funneled into Amazon Kinesis Data Streams which further acts as the source of a delivery stream for Amazon Kinesis Firehose. The engineering team has now configured a Kinesis Agent to send IoT data from another set of devices to the same Amazon Kinesis Firehose delivery stream. They noticed that data is not reaching Kinesis Firehose as expected. As a solutions architect, which of the following options would you attribute as the MOST plausible root cause behind this issue?",
                options: [
                    "The data sent by Kinesis Agent is lost because of a confguration error",
                    "Amazon Kinesis Firehose delivery stream has reached its limit and needs to be scaled manually",
                    "Kinesis Agent can only write to Amazon Kinesis Data Streams, not to Amazon Kinesis Firehose",
                    "Kinesis Agent cannot write to Amazon Kinesis Firehose for which the delivery stream source is already set as Amazon Kinesis Data Streams"
                ],
                correct: [3],
                explanation: "A Kinesis Firehose delivery stream can have only one source. If it is configured to receive data from a Kinesis Data Stream, it cannot also receive data directly from other sources like the Kinesis Agent or direct API calls. You would need a separate Firehose delivery stream for the agent's data.",
                focus: "Kinesis Firehose Source Limits",
                focusExplanation: "This is a key architectural constraint of Kinesis Firehose. Understanding that a Firehose delivery stream is configured with a single, specific source (either Direct PUT, or a Kinesis Data Stream) is critical for designing data ingestion pipelines and troubleshooting issues like this."
            },
            {
                id: 53,
                text: "A developer has configured inbound traﬃc for the relevant ports in both the Security Group of the Amazon EC2 instance as well as the network access control list (network ACL) of the subnet for the Amazon EC2 instance. The developer is, however, unable to connect to the service running on the Amazon EC2 instance. As a solutions architect, how will you fix this issue?",
                options: [
                    "Network access control list (network ACL) are stateful, so allowing inbound tra[c to the necessary ports enables the connection. Security Groups are stateless, so you must allow both inbound and outbound tra[c",
                    "Rules associated with network access control list (network ACL) should never be modifed from command line. An attempt to modify rules from command line blocks the rule and results in an erratic behavior",
                    "Security Groups are stateful, so allowing inbound tra[c to the necessary ports enables the connection. Network access control list (network ACL) are stateless, so you must allow both inbound and outbound tra[c",
                    "IAM Role defned in the Security Group is different from the IAM Role that is given access in the network access control list (network ACL)"
                ],
                correct: [2],
                explanation: "Security Groups are stateful; if you allow inbound traffic, the return outbound traffic is automatically allowed. Network ACLs are stateless. You must explicitly allow both inbound and outbound traffic. For a connection to work, you must allow inbound traffic on the service port (e.g., 80) and also allow outbound traffic on the ephemeral port range (1024-65535) for the return traffic.",
                focus: "Security Groups (Stateful) vs. NACLs (Stateless)",
                focusExplanation: "The stateful vs. stateless nature of Security Groups and Network ACLs is a fundamental and frequently tested networking concept. Forgetting to add an outbound rule to a restrictive NACL to allow for return traffic is one of the most common connectivity issues in a VPC."
            },
            {
                id: 54,
                text: "The engineering team at a logistics company has noticed that the Auto Scaling group (ASG) is not terminating an unhealthy Amazon EC2 instance. As a Solutions Architect, which of the following options would you suggest to troubleshoot the issue? (Select THREE)",
                options: [
                    "The Amazon EC2 instance could be a spot instance type, which cannot be terminated by the Auto Scaling group (ASG)",
                    "The instance maybe in Impaired status",
                    "The instance has failed the Elastic Load Balancing (ELB) health check status",
                    "A user might have updated the confguration of the Auto Scaling group (ASG) and increased the minimum number of instances forcing ASG to keep all instances alive",
                    "The health check grace period for the instance has not expired",
                    "A custom health check might have failed. The Auto Scaling group (ASG) does not terminate instances that are set unhealthy by custom checks"
                ],
                correct: [1, 2, 4],
                multiSelect: true,
                explanation: "An ASG will not terminate an instance if: the instance has failed an EC2 status check (Impaired), it has failed an ELB health check, or it is still within its health check grace period. These are the primary health checks that ASGs use to determine an instance's health and whether to replace it.",
                focus: "Auto Scaling Health Checks",
                focusExplanation: "Troubleshooting why an ASG isn't replacing an instance requires understanding its health check sources. The ASG relies on signals from EC2 status checks and, if configured, ELB health checks. The health check grace period is also a common reason for delayed termination, as it gives an instance time to start up before being monitored."
            },
            {
                id: 55,
                text: "A financial services company wants a single log processing model for all the log files (consisting of system logs, application logs, database logs, etc) that can be processed in a serverless fashion and then durably stored for downstream analytics. The company wants to use an AWS managed service that automatically scales to match the throughput of the log data and requires no ongoing administration. As a solutions architect, which of the following AWS services would you recommend solving this problem?",
                options: [
                    "Amazon Kinesis Data Firehose",
                    "AWS Lambda",
                    "Amazon Kinesis Data Streams",
                    "Amazon EMR"
                ],
                correct: [0],
                explanation: "Amazon Kinesis Data Firehose is the easiest way to reliably load streaming data into data lakes, data stores, and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, and more. It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration.",
                focus: "Managed Data Ingestion (Kinesis Firehose)",
                focusExplanation: "Kinesis Firehose is the key service for when you need a *fully managed* solution to capture, transform, and load streaming data into destinations like S3 or Redshift. Its serverless, auto-scaling nature makes it ideal for log aggregation with minimal operational overhead."
            },
            {
                id: 56,
                text: "The engineering manager for a content management application wants to set up Amazon RDS read replicas to provide enhanced performance and read scalability. The manager wants to understand the data transfer charges while setting up Amazon RDS read replicas. Which of the following would you identify as correct regarding the data transfer charges for Amazon RDS read replicas?",
                options: [
                    "There are data transfer charges for replicating data within the same Availability Zone (AZ)",
                    "There are no data transfer charges for replicating data across AWS Regions",
                    "There are data transfer charges for replicating data across AWS Regions",
                    "There are data transfer charges for replicating data within the same AWS Region"
                ],
                correct: [2],
                explanation: "You are not charged for the data transfer incurred in replicating data between your source DB instance and read replica within the same AWS Region. However, data transfer across different AWS Regions will incur charges.",
                focus: "RDS Data Transfer Costs",
                focusExplanation: "Understanding AWS data transfer pricing is crucial for cost optimization. A key rule is that data transfer *within* a region is generally free between AWS services, but data transfer *across* regions almost always incurs costs. This applies directly to RDS cross-region replication."
            },
            {
                id: 57,
                text: "A manufacturing company receives unreliable service from its data center provider because the company is located in an area prone to natural disasters. The company is not ready to fully migrate to the AWS Cloud, but it wants a failover environment on AWS in case the on-premises data center fails. The company runs web servers that connect to external vendors. The data available on AWS and on-premises must be uniform. Which of the following solutions would have the LEAST amount of downtime?",
                options: [
                    "Set up a Amazon Route 53 failover record. Run an AWS Lambda function to execute an AWS CloudFormation template to launch two Amazon EC2 instances. Set up AWS Storage Gateway with stored volumes to back up data to Amazon S3. Set up an AWS Direct Connect connection between a VPC and the data center",
                    "Set up a Amazon Route 53 failover record. Run application servers on Amazon EC2 instances behind an Application Load Balancer in an Auto Scaling group. Set up AWS Storage Gateway with stored volumes to back up data to Amazon S3",
                    "Set up a Amazon Route 53 failover record. Execute an AWS CloudFormation template from a script to provision Amazon EC2 instances behind an Application Load Balancer. Set up AWS Storage Gateway with stored volumes to back up data to Amazon S3",
                    "Set up a Amazon Route 53 failover record. Set up an AWS Direct Connect connection between a VPC and the data center. Run application servers on Amazon EC2 in an Auto Scaling group. Run an AWS Lambda function to execute an AWS CloudFormation template to create an Application Load Balancer"
                ],
                correct: [1],
                explanation: "This solution covers all bases for a warm standby approach: Route 53 for DNS failover, a pre-warmed, scalable, and highly available EC2 setup (Auto Scaling group behind an ALB), and Storage Gateway to continuously replicate data to AWS, ensuring uniformity. This combination provides the least downtime as the core infrastructure is already running.",
                focus: "Disaster Recovery Strategies (Warm Standby)",
                focusExplanation: "This scenario describes a 'Warm Standby' disaster recovery strategy. The core idea is to have a scaled-down version of the full environment running on AWS that can be quickly scaled up to production capacity when a disaster strikes the primary on-premises site. This provides a balance between cost and recovery time."
            },
            {
                id: 58,
                text: "A company is looking at storing their less frequently accessed files on AWS that can be concurrently accessed by hundreds of Amazon EC2 instances. The company needs the most cost-effective file storage service that provides immediate access to data whenever needed. Which of the following options represents the best solution for the given requirements?",
                options: [
                    "Amazon Elastic File System (EFS) Standard storage class",
                    "Amazon S3 Standard-Infrequent Access (S3 Standard-IA) storage class",
                    "Amazon Elastic Block Store (EBS)",
                    "Amazon Elastic File System (EFS) Standard–IA storage class"
                ],
                correct: [3],
                explanation: "The key requirements are concurrent access from many EC2 instances (ruling out EBS) and file storage (ruling out S3 for a direct mount use case). Amazon EFS is a file system that can be mounted by many instances. For less frequently accessed files, the Infrequent Access (IA) storage class is the most cost-effective tier within EFS.",
                focus: "Cost-Effective File Storage (EFS Infrequent Access)",
                focusExplanation: "EFS is the service for shared file storage for EC2. To optimize costs, it's essential to know about its storage tiers. EFS Infrequent Access (IA) is designed for files that are not accessed every day, providing a lower storage price point compared to EFS Standard, which is perfect for this use case."
            },
            {
                id: 59,
                text: "A silicon valley based startup has a content management application with the web-tier running on Amazon EC2 instances and the database tier running on Amazon Aurora. Currently, the entire infrastructure is located in us-east-1 region. The startup has 90% of its customers in the US and Europe. The engineering team is getting reports of deteriorated application performance from customers in Europe with high application load time. As a solutions architect, which of the following would you recommend addressing these performance issues? (Select TWO)",
                options: [
                    "Setup another jeet of Amazon EC2 instances for the web tier in the eu-west-1 region. Enable failover routing policy in Amazon Route 53",
                    "Create Amazon Aurora read replicas in the eu-west-1 region",
                    "Setup another jeet of Amazon EC2 instances for the web tier in the eu-west-1 region. Enable geolocation routing policy in Amazon Route 53",
                    "Create Amazon Aurora Multi-AZ standby instance in the eu-west-1 region",
                    "Setup another jeet of Amazon EC2 instances for the web tier in the eu-west-1 region. Enable latency routing policy in Amazon Route 53"
                ],
                correct: [1, 4],
                multiSelect: true,
                explanation: "To reduce latency for European users, you need resources in Europe. This means deploying a fleet of EC2 instances there for the application tier and creating cross-region Aurora read replicas for the database tier. Latency routing in Route 53 is the correct policy to direct users to the regional endpoint with the lowest network latency for them.",
                focus: "Global Application Architecture (Latency Routing & Cross-Region Replicas)",
                focusExplanation: "This is a classic global application pattern. To serve a global audience with low latency, you must place both your application servers and your data (via read replicas) closer to your users. Route 53's latency-based routing is the mechanism that directs users to the nearest regional deployment."
            },
            {
                id: 60,
                text: "You have a team of developers in your company, and you would like to ensure they can quickly experiment with AWS Managed Policies by attaching them to their accounts, but you would like to prevent them from doing an escalation of privileges, by granting themselves the AdministratorAccess managed policy. How should you proceed?",
                options: [
                    "Create a Service Control Policy (SCP) on your AWS account that restricts developers from attaching themselves the AdministratorAccess policy",
                    "Put the developers into an IAM group, and then defne an IAM permission boundary on the group that will restrict the managed policies they can attach to themselves",
                    "For each developer, defne an IAM permission boundary that will restrict the managed policies they can attach to themselves",
                    "Attach an IAM policy to your developers, that prevents them from attaching the AdministratorAccess policy"
                ],
                correct: [2],
                explanation: "An IAM permissions boundary sets the maximum permissions an IAM entity (user or role) can have. Even if a developer has a policy allowing them to attach any policy, the boundary acts as a guardrail, preventing them from granting themselves permissions beyond what the boundary allows. It must be applied to the user or role, not the group.",
                focus: "Preventing Privilege Escalation (IAM Permissions Boundary)",
                focusExplanation: "IAM Permissions Boundaries are an advanced security feature specifically designed to delegate permissions management safely. They create a 'ceiling' on the permissions a user can have, effectively preventing them from escalating their own privileges beyond the defined boundary, even if they have `iam:AttachUserPolicy` permissions."
            },
            {
                id: 61,
                text: "Upon a security review of your AWS account, an AWS consultant has found that a few Amazon RDS databases are unencrypted. As a Solutions Architect, what steps must be taken to encrypt the Amazon RDS databases?",
                options: [
                    "Enable Multi-AZ for the database, and make sure the standby instance is encrypted. Stop the main database to that the standby database kicks in, then disable Multi-AZ",
                    "Enable encryption on the Amazon RDS database using the AWS Console",
                    "Take a snapshot of the database, copy it as an encrypted snapshot, and restore a database from the encrypted snapshot. Terminate the previous database",
                    "Create a Read Replica of the database, and encrypt the read replica. Promote the read replica as a standalone database, and terminate the previous database"
                ],
                correct: [2],
                explanation: "You can only enable encryption for an Amazon RDS DB instance when you create it, not after. However, you can encrypt a copy of an unencrypted snapshot. Therefore, the standard procedure is to create a snapshot, create an encrypted copy of that snapshot, restore a new DB instance from the encrypted snapshot, and then migrate traffic and delete the old instance.",
                focus: "Encrypting an existing RDS Instance",
                focusExplanation: "This is a key operational procedure for RDS. Because encryption can only be enabled at creation, the snapshot-copy-restore method is the standard, documented process for applying encryption to a previously unencrypted database. It's a common exam scenario."
            },
            {
                id: 62,
                text: "You would like to use AWS Snowball to move on-premises backups into a long term archival tier on AWS. Which solution provides the MOST cost savings?",
                options: [
                    "Create a AWS Snowball job and target an Amazon S3 Glacier Deep Archive Vault",
                    "Create an AWS Snowball job and target a Amazon S3 Glacier Vault",
                    "Create an AWS Snowball job and target an Amazon S3 bucket. Create a lifecycle policy to transition this data to Amazon S3 Glacier Deep Archive on the same day",
                    "Create an AWS Snowball job and target an Amazon S3 bucket. Create a lifecycle policy to transition this data to Amazon S3 Glacier on the same day"
                ],
                correct: [2],
                explanation: "AWS Snowball devices import data directly into Amazon S3. You cannot target Glacier or Glacier Deep Archive directly. From S3, you must use a lifecycle policy to transition the objects to an archival tier. S3 Glacier Deep Archive is the cheapest long-term archival storage, making this the most cost-effective path.",
                focus: "AWS Snowball Data Path & S3 Lifecycle Policies",
                focusExplanation: "This tests the data flow for Snow Family devices. The data always lands in S3 first. From there, you use standard S3 features like lifecycle policies to move it to other storage classes. For maximum long-term cost savings, transitioning to S3 Glacier Deep Archive is the best choice."
            },
            {
                id: 63,
                text: "An application runs big data workloads on Amazon Elastic Compute Cloud (Amazon EC2) instances. The application runs 24x7 all round the year and needs at least 20 instances to maintain a minimum acceptable performance threshold and the application needs 300 instances to handle spikes in the workload. Based on historical workloads processed by the application, it needs 80 instances 80% of the time. As a solutions architect, which of the following would you recommend as the MOST cost-optimal solution so that it can meet the workload demand in a steady state?",
                options: [
                    "Purchase 20 on-demand instances. Use Auto Scaling Group to provision the remaining instances as spot instances per the workload demand",
                    "Purchase 80 reserved instances (RIs). Provision additional on-demand and spot instances per the workload demand (Use Auto Scaling Group with launch template to provision the mix of on-demand and spot instances)",
                    "Purchase 80 on-demand instances. Provision additional on-demand and spot instances per the workload demand (Use Auto Scaling Group with launch template to provision the mix of on-demand and spot instances)",
                    "Purchase 80 spot instances. Use Auto Scaling Group to provision the remaining instances as on-demand instances per the workload demand"
                ],
                correct: [1],
                explanation: "As the steady-state workload demand is 80 instances, we can save on costs by purchasing 80 reserved instances (or a Savings Plan). Based on additional workload demand, we can specify a mix of on-demand and spot instances using an Auto Scaling Group with a launch template to handle the spikes.",
                focus: "EC2 Cost Optimization Strategy",
                focusExplanation: "This is a classic cost-optimization scenario. The key is to cover your baseline, predictable workload with a commitment-based discount (Reserved Instances or Savings Plans). Then, you handle the variable or spiky part of your workload with more flexible options like On-Demand and Spot."
            },
            {
                id: 64,
                text: "A big-data consulting firm is working on a client engagement where the extract, transform, and load (ETL) workloads are currently handled via a Hadoop cluster deployed in the on-premises data center. The client wants to migrate their ETL workloads to AWS Cloud. The AWS Cloud solution needs to be highly available with about 50 Amazon Elastic Compute Cloud (Amazon EC2) instances per Availability Zone (AZ). As a solutions architect, which of the following Amazon EC2 placement groups would you recommend for handling the distributed ETL workload?",
                options: [
                    "Both Spread placement group and Partition placement group",
                    "Spread placement group",
                    "Cluster placement group",
                    "Partition placement group"
                ],
                correct: [3],
                explanation: "Partition placement groups are designed for large, distributed, and replicated workloads like Hadoop, HDFS, and Cassandra. It spreads instances across distinct hardware racks within an AZ to reduce the impact of correlated hardware failures, while still providing visibility into the partitions.",
                focus: "EC2 Placement Groups (Partition)",
                focusExplanation: "Choosing the right placement group is vital for performance and availability. Partition placement groups are specifically designed for distributed data workloads like Hadoop. They provide a balance between spreading instances out to reduce failure impact and grouping them logically for application awareness."
            },
            {
                id: 65,
                text: "An HTTP application is deployed on an Auto Scaling Group, is accessible from an Application Load Balancer (ALB) that provides HTTPS termination, and accesses a PostgreSQL database managed by Amazon RDS. How should you configure the security groups? (Select THREE)",
                options: [
                    "The security group of Amazon RDS should have an inbound rule from the security group of the Amazon EC2 instances in the Auto Scaling group on port 5432",
                    "The security group of the Application Load Balancer should have an inbound rule from anywhere on port 443",
                    "The security group of the Application Load Balancer should have an inbound rule from anywhere on port 80",
                    "The security group of the Amazon EC2 instances should have an inbound rule from the security group of the Application Load Balancer on port 80",
                    "The security group of Amazon RDS should have an inbound rule from the security group of the Amazon EC2 instances in the Auto Scaling group on port 80",
                    "The security group of the Amazon EC2 instances should have an inbound rule from the security group of the Amazon RDS database on port 5432"
                ],
                correct: [0, 1, 3],
                multiSelect: true,
                explanation: "This describes a standard 3-tier web architecture security group setup. 1) Public traffic hits the ALB on HTTPS port 443 (from 0.0.0.0/0). 2) The ALB forwards traffic to the EC2 instances on HTTP port 80 (source: ALB's security group). 3) The EC2 instances connect to the RDS database on the PostgreSQL port 5432 (source: EC2 instances' security group).",
                focus: "3-Tier Web App Security Groups",
                focusExplanation: "This is a fundamental networking and security configuration. The principle of least privilege is applied by only allowing traffic from the preceding layer. Using security group IDs as the source (e.g., sg-alb allows traffic to sg-ec2) is a best practice as it's more secure and dynamic than using IP ranges."
            },
            {
                id: 66,
                text: "A financial services company has deployed its flagship application on Amazon EC2 instances. Since the application handles sensitive customer data, the security team at the company wants to ensure that any third-party Secure Sockets Layer certificate (SSL certificate) SSL/Transport Layer Security (TLS) certificates configured on Amazon EC2 instances via the AWS Certificate Manager (ACM) are renewed before their expiry date. The company has hired you as an AWS Certified Solutions Architect Associate to build a solution that notifies the security team 30 days before the certificate expiration. The solution should require the least amount of scripting and maintenance effort. What will you recommend?",
                options: [
                    "Leverage AWS Confg managed rule to check if any third-party SSL/TLS certifcates imported into ACM are marked for expiration within 30 days. Confgure the rule to trigger an Amazon SNS notifcation to the security team if any certifcate expires within 30 days",
                    "Monitor the days to expiry Amazon CloudWatch metric for certifcates imported into ACM. Create a CloudWatch alarm to monitor such certifcates based on the days to expiry metric and then trigger a custom action of notifying the security team",
                    "Leverage AWS Confg managed rule to check if any SSL/TLS certifcates created via ACM are marked for expiration within 30 days. Confgure the rule to trigger an Amazon SNS notifcation to the security team if any certifcate expires within 30 days",
                    "Monitor the days to expiry Amazon CloudWatch metric for certifcates created via ACM. Create a CloudWatch alarm to monitor such certifcates based on the days to expiry metric and then trigger a custom action of notifying the security team"
                ],
                correct: [0],
                explanation: "While you can use CloudWatch alarms, AWS Config provides a *managed rule* (`acm-certificate-expiration-check`) specifically for this purpose. A managed rule requires the least configuration and maintenance effort, directly checking for imported certificates nearing expiration and allowing for an automated SNS notification.",
                focus: "Compliance & Monitoring (AWS Config)",
                focusExplanation: "While CloudWatch is for monitoring metrics, AWS Config is for assessing, auditing, and evaluating the configurations of your AWS resources. For compliance checks like 'are any certificates about to expire?', Config often provides a pre-built, managed rule that is easier and more direct than setting up custom alarms."
            },
            {
                id: 67,
                text: "An e-commerce company operates multiple AWS accounts and has interconnected these accounts in a hub-and-spoke style using the AWS Transit Gateway. Amazon Virtual Private Cloud (Amazon VPCs) have been provisioned across these AWS accounts to facilitate network isolation. Which of the following solutions would reduce both the administrative overhead and the costs while providing shared access to services required by workloads in each of the VPCs?",
                options: [
                    "Build a shared services Amazon Virtual Private Cloud (Amazon VPC)",
                    "Use VPCs connected with AWS Direct Connect",
                    "Use Transit VPC to reduce cost and share the resources across Amazon Virtual Private Cloud (Amazon VPCs)",
                    "Use Fully meshed VPC Peering connection"
                ],
                correct: [0],
                explanation: "In a hub-and-spoke model with Transit Gateway, a common pattern is to create a dedicated 'Shared Services' VPC. This VPC hosts common resources like directory services, logging endpoints, or monitoring tools. All other 'spoke' VPCs can be routed to this shared VPC via the Transit Gateway, centralizing services and reducing duplication.",
                focus: "Shared Services VPC Architecture",
                focusExplanation: "This is a common and efficient network design pattern on AWS. Instead of deploying shared resources in every VPC, you create a central VPC to host them. The Transit Gateway then provides the connectivity, simplifying management and reducing costs by eliminating redundant infrastructure."
            },
            {
                id: 68,
                text: "An IT consultant is helping the owner of a medium-sized business set up an AWS account. What are the security recommendations he must follow while creating the AWS account root user? (Select two)",
                options: [
                    "Create a strong password for the AWS account root user",
                    "Encrypt the access keys and save them on Amazon S3",
                    "Enable Multi Factor Authentication (MFA) for the AWS account root user account",
                    "Send an email to the business owner with details of the login username and password for the AWS root user. This will help the business owner to troubleshoot any login issues in future",
                    "Create AWS account root user access keys and share those keys only with the business owner"
                ],
                correct: [0, 2],
                multiSelect: true,
                explanation: "AWS recommends that you do not create an access key for your AWS account root user unless absolutely necessary. The best practices are to create a strong password and enable Multi-Factor Authentication (MFA) to secure the root user account.",
                focus: "Root User Security",
                focusExplanation: "Securing the account root user is the most critical initial step in AWS. The core principles are to use a strong password, enable MFA, and strictly avoid creating or using root access keys for programmatic access. This is a foundational security principle."
            },
            {
                id: 69,
                text: "An organization wants to delegate access to a set of users from the development environment so that they can access some resources in the production environment which is managed under another AWS account. As a solutions architect, which of the following steps would you recommend?",
                options: [
                    "Create a new IAM role with the required permissions to access the resources in the production environment. The users can then assume this IAM role while accessing the resources from the production environment",
                    "It is not possible to access cross-account resources",
                    "Create new IAM user credentials for the production environment and share these credentials with the set of users from the development environment",
                    "Both IAM roles and IAM users can be used interchangeably for cross-account access"
                ],
                correct: [0],
                explanation: "IAM roles allow you to delegate access to users or services that normally don't have access to your organization's AWS resources. IAM users or AWS services can assume a role to obtain temporary security credentials that can be used to make AWS API calls. This is the secure way to handle cross-account access.",
                focus: "Cross-Account IAM Roles",
                focusExplanation: "Using IAM roles for cross-account access is a fundamental security and operational best practice. It allows you to grant temporary, auditable access to resources in another account without creating and sharing permanent credentials, which is a significant security risk."
            },
            {
                id: 70,
                text: "The engineering team at an in-home fitness company is evaluating multiple in-memory data stores with the ability to power its on-demand, live leaderboard. The company's leaderboard requires high availability, low latency, and real-time processing. As a solutions architect, which of the following solutions would you recommend? (Select two)",
                options: [
                    "Power the on-demand, live leaderboard using Amazon DynamoDB",
                    "Power the on-demand, live leaderboard using Amazon DynamoDB with DynamoDB Accelerator (DAX)",
                    "Power the on-demand, live leaderboard using Amazon ElastiCache for Redis",
                    "Power the on-demand, live leaderboard using Amazon RDS for Aurora",
                    "Power the on-demand, live leaderboard using Amazon Neptune"
                ],
                correct: [1, 2],
                multiSelect: true,
                explanation: "For use cases requiring microsecond latency like a real-time leaderboard, an in-memory datastore is required. Amazon ElastiCache for Redis is a pure in-memory store. DynamoDB Accelerator (DAX) is an in-memory cache for DynamoDB, providing the necessary performance boost. Standard DynamoDB, Aurora, and Neptune are not in-memory databases.",
                focus: "In-Memory Databases (DAX & ElastiCache)",
                focusExplanation: "Recognizing when a use case demands an in-memory database for extreme low latency is key. Both ElastiCache (especially Redis) and DynamoDB with DAX are primary AWS services for these scenarios. Knowing their respective strengths is crucial for designing high-performance applications."
            },
            {
                id: 71,
                text: "A media company uses Amazon S3 encrypted with AWS KMS keys that the company manages. A developer accidentally deleted a KMS key yesterday. As a solutions architect, which of the following steps would you recommend to solve this issue?",
                options: [
                    "Contact AWS support to retrieve the AWS KMS key from their backup",
                    "The AWS KMS key can be recovered by the AWS root account user",
                    "The company should issue a notification on its web application informing the users about the loss of their data",
                    "As the AWS KMS key was deleted a day ago, it must be in the 'pending deletion' status and hence you can just cancel the KMS key deletion and recover the key"
                ],
                correct: [3],
                explanation: "Deleting a KMS key is a destructive action, so AWS enforces a mandatory waiting period (7 to 30 days). During this 'Pending deletion' state, the deletion can be cancelled, allowing for recovery from accidental deletion.",
                focus: "KMS Key Deletion Recovery",
                focusExplanation: "The KMS key deletion waiting period is a critical safety feature. Understanding that deleting a key is a scheduled action and that it can be cancelled during the waiting period is essential for managing cryptographic resources and preventing irreversible data loss."
            },
            {
                id: 72,
                text: "A media company runs a photo-sharing web application accessed from three countries. It is deployed on EC2 instances behind an Application Load Balancer. Due to new regulations, access must be blocked from two countries. Which configuration should be used?",
                options: [
                    "Configure the security group for the Amazon EC2 instances",
                    "Use Geo Restriction feature of Amazon CloudFront",
                    "Configure AWS Web Application Firewall (AWS WAF) on the Application Load Balancer",
                    "Configure the security group on the Application Load Balancer"
                ],
                correct: [2],
                explanation: "AWS WAF allows you to create rules to filter web traffic based on conditions like the IP addresses that requests originate from. Geographic match conditions in AWS WAF let you restrict application access based on the geographic location of your viewers.",
                focus: "Geographic Blocking (AWS WAF)",
                focusExplanation: "AWS WAF is the primary service for protecting web applications from malicious traffic and implementing access control based on request characteristics. Its geographic match feature is the correct way to allow or block traffic from specific countries."
            },
            {
                id: 73,
                text: "A notification system uses SNS to trigger a Lambda function. During off-season, it handles 100 requests/sec, but during peak season it hits 5000 requests/sec and notifications fail. What is the most likely cause?",
                options: [
                    "Amazon SNS message deliveries to AWS Lambda have crossed the account concurrency quota for AWS Lambda, so the team needs to contact AWS support to raise the account limit",
                    "The engineering team needs to provision more servers running the Amazon SNS service",
                    "Amazon SNS has hit a scalability limit, so the team needs to contact AWS support to raise the account limit",
                    "The engineering team needs to provision more servers running the AWS Lambda service"
                ],
                correct: [0],
                explanation: "Amazon SNS and AWS Lambda are both fully managed, auto-scaling services. The most common bottleneck in this architecture is hitting the regional concurrent execution limit for Lambda functions. When SNS tries to invoke thousands of Lambda functions simultaneously, it can exceed this account-level quota, leading to throttled invocations and failed notifications.",
                focus: "Lambda Concurrency Limits",
                focusExplanation: "Understanding Lambda's concurrency model and its account-level limits is critical for designing scalable serverless applications. When a service like SNS fans out to Lambda, you can easily hit these limits, and the solution is to request a service quota increase."
            },
            {
                id: 74,
                text: "A gaming company needs to improve availability and performance for its global UDP-based application. The solution must support fast regional failover and allow the company to use its own custom DNS service. Which AWS service is best?",
                options: [
                    "AWS Elastic Load Balancing (ELB)",
                    "Amazon Route 53",
                    "AWS Global Accelerator",
                    "Amazon CloudFront"
                ],
                correct: [2],
                explanation: "AWS Global Accelerator is designed for this use case. It provides static IP addresses as a fixed entry point and directs traffic to the optimal endpoint based on performance, including failing over to a healthy region. It works with non-HTTP traffic (UDP/TCP) and operates independently of DNS.",
                focus: "Global Traffic Management (Global Accelerator)",
                focusExplanation: "Global Accelerator is the go-to service for improving performance and availability of global applications using TCP or UDP. It provides static anycast IPs and intelligent routing over the AWS global network, enabling instant regional failover without relying on DNS changes."
            },
            {
                id: 75,
                text: "A research agency collects 1GB/min of seismological data and wants to store only relevant attributes for a predictive model. What is the most cost-effective and low-maintenance solution?",
                options: [
                    "Ingest the data in Amazon Kinesis Data Streams and use an intermediary AWS Lambda function to filter and transform the incoming stream before the output is dumped on Amazon S3",
                    "Ingest the data in Amazon Kinesis Data Analytics and use SQL queries to filter and transform the data before writing to Amazon S3",
                    "Ingest the data in a Spark Streaming Cluster on Amazon EMR and use Spark Streaming transformations before writing to Amazon S3",
                    "Ingest the data in Amazon Kinesis Data Firehose and use an intermediary AWS Lambda function to filter and transform the incoming stream before the output is dumped on Amazon S3"
                ],
                correct: [3],
                explanation: "Amazon Kinesis Data Firehose is the easiest way to reliably load streaming data into destinations like Amazon S3. It is a fully managed service that can invoke a Lambda function to transform incoming source data before delivering it to the destination. This provides a serverless, low-maintenance solution.",
                focus: "Serverless Data Transformation (Kinesis Firehose + Lambda)",
                focusExplanation: "Kinesis Firehose is designed for simple, managed data ingestion. Its built-in Lambda integration provides a powerful, serverless way to perform real-time data transformation and filtering before the data lands in its final destination, like S3."
            },
            {
                id: 76,
                text: "Amazon CloudFront's regional edge caches improve latency. Which content types bypass the regional edge cache and go directly to the origin? (Select two)",
                options: [
                    "Dynamic content, as determined at request time (cache-behavior configured to forward all headers)",
                    "E-commerce assets such as product photos",
                    "Static content such as style sheets, JavaScript files",
                    "User-generated videos",
                    "Proxy methods PUT/POST/PATCH/OPTIONS/DELETE go directly to the origin"
                ],
                correct: [0, 4],
                multiSelect: true,
                explanation: "CloudFront's regional edge caches are primarily for cacheable content. Dynamic content (where all headers are forwarded, indicating unique responses) and write-style proxy methods (PUT, POST, etc.) are not cached and are sent directly to the origin from the edge location.",
                focus: "CloudFront Caching Tiers",
                focusExplanation: "Understanding CloudFront's multi-tier caching architecture, including what type of content is handled by POPs vs. regional edge caches, is key to optimizing content delivery performance. Dynamic requests and write operations bypass the regional tier by design."
            },
            {
                id: 77,
                text: "An e-commerce application uses multiple microservices behind an Application Load Balancer. How can the team route traffic to different services based on the URL (e.g., /orders vs /products)?",
                options: [
                    "Query string parameter-based routing",
                    "Host-based Routing",
                    "HTTP header-based routing",
                    "Path-based Routing"
                ],
                correct: [3],
                explanation: "Application Load Balancers support path-based routing. You can create listener rules that evaluate the path of the request URL and forward the request to a specific target group based on that path.",
                focus: "Application Load Balancer Routing",
                focusExplanation: "Content-based routing is a key feature of Application Load Balancers (ALBs). Path-based routing, specifically, is the standard way to direct traffic for different URL paths (like `/api`, `/images`, `/users`) to different backend microservices."
            },
            {
                id: 78,
                text: "An application on EC2 instances in an Auto Scaling group functions best at 50% CPU utilization. How should this be configured to maintain this state?",
                options: [
                    "Configure the Auto Scaling group to use a Amazon Cloudwatch alarm triggered on a CPU utilization threshold of 50%",
                    "Configure the Auto Scaling group to use simple scaling policy and set the CPU utilization as the target metric with a target value of 50%",
                    "Configure the Auto Scaling group to use target tracking policy and set the CPU utilization as the target metric with a target value of 50%",
                    "Configure the Auto Scaling group to use step scaling policy and set the CPU utilization as the target metric with a target value of 50%"
                ],
                correct: [2],
                explanation: "Target tracking scaling policies are designed for this exact use case. You select a metric (like CPU utilization) and set a target value (50%). Amazon EC2 Auto Scaling then creates and manages the CloudWatch alarms that trigger the scaling policy and calculates the scaling adjustment based on the metric and the target value.",
                focus: "Auto Scaling Policies (Target Tracking)",
                focusExplanation: "Target tracking is the simplest and most effective scaling policy for many use cases. It allows you to maintain a key metric at a desired level, and AWS handles the complexity of creating alarms and calculating scaling actions for you."
            },
            {
                id: 79,
                text: "An e-commerce company needs a highly available solution for its flagship application running on a fleet of EC2 instances. The solution must allow for content-based routing. Which services should be used?",
                options: [
                    "Use a Network Load Balancer for distributing traffic to the Amazon EC2 instances spread across different Availability Zones (AZs).",
                    "Use an Application Load Balancer for distributing traffic to the Amazon EC2 instances spread across different Availability Zones (AZs). Configure Auto Scaling group to mask any failure of an instance",
                    "Use an Auto Scaling group for distributing traffic to the Amazon EC2 instances spread across different Availability Zones (AZs).",
                    "Use an Auto Scaling group with an Elastic IP address (EIP) to mask any failure of an instance"
                ],
                correct: [1],
                explanation: "The Application Load Balancer (ALB) is the correct choice as it operates at Layer 7 and supports content-based routing. Combining it with an Auto Scaling group across multiple AZs ensures high availability and automatic replacement of failed instances.",
                focus: "High Availability Architecture (ALB + ASG)",
                focusExplanation: "The combination of an Application Load Balancer (for intelligent routing) and an Auto Scaling Group across multiple Availability Zones (for fault tolerance and elasticity) is the foundational pattern for building highly available web applications on AWS."
            },
            {
                id: 80,
                text: "A company uses S3 Object Lock, but retention rules are not working as expected. Which configurations for retention periods are valid? (Select two)",
                options: [
                    "Different versions of a single object can have different retention modes and periods",
                    "When you apply a retention period to an object version explicitly, you specify a Retain Until Date for the object version",
                    "The bucket default settings will override any explicit retention mode or period you request on an object version",
                    "You cannot place a retention period on an object version through a bucket default setting",
                    "When you use bucket default settings, you specify a Retain Until Date for the object version"
                ],
                correct: [0, 1],
                multiSelect: true,
                explanation: "With S3 Object Lock, an explicit retention setting on a specific object version always overrides the bucket's default setting. You can set different retention modes and periods for different versions of the same object. When setting retention explicitly, you provide a specific 'Retain Until Date'.",
                focus: "S3 Object Lock",
                focusExplanation: "Understanding the details of S3 Object Lock is crucial for compliance scenarios. Key concepts include knowing that settings on individual objects override bucket defaults and that different versions of an object can have independent retention settings."
            },
            {
                id: 81,
                text: "A company has decided to stop using Amazon GuardDuty and wants to ensure all existing findings are permanently deleted. How can this be achieved?",
                options: [
                    "Raise a service request with Amazon to completely delete the data from all their backups",
                    "Disable the service in the general settings",
                    "De-register the service under services tab",
                    "Suspend the service in the general settings"
                ],
                correct: [1],
                explanation: "Suspending GuardDuty only stops it from monitoring and generating new findings, but all existing findings and configurations are retained. Disabling GuardDuty is a permanent action that deletes all existing data, including your findings and configurations, before relinquishing service permissions.",
                focus: "AWS Service Decommissioning (GuardDuty)",
                focusExplanation: "It's important to understand the difference between suspending and disabling AWS services. For GuardDuty, 'disable' is the destructive action that permanently removes all data and configurations, which is the required action to meet the company's requirement."
            },
            {
                id: 82,
                text: "A company needs to migrate a legacy application to AWS. The application requires specialized customizations to the Oracle database and its underlying host OS. The solution must be highly available and minimize infrastructure maintenance. What is the best solution?",
                options: [
                    "Leverage cross AZ read-replica configuration of Amazon RDS for Oracle",
                    "Leverage multi-AZ configuration of Amazon RDS Custom for Oracle that allows the Database Administrator (DBA) to access and customize the database environment and the underlying operating system",
                    "Leverage multi-AZ configuration of Amazon RDS for Oracle",
                    "Deploy the Oracle database layer on multiple Amazon EC2 instances spread across two Availability Zones (AZs)"
                ],
                correct: [1],
                explanation: "Standard Amazon RDS does not allow access to the underlying OS. Deploying on EC2 increases maintenance effort. Amazon RDS Custom is designed for this exact scenario: applications that require access to customize the underlying OS and database environment, while still benefiting from the managed services features of RDS, like Multi-AZ for high availability.",
                focus: "Managed Databases with Customization (RDS Custom)",
                focusExplanation: "Amazon RDS Custom bridges the gap between the fully managed RDS and self-managed databases on EC2. It's the ideal choice when you need the automation of a managed service but also require deep access to the OS and database for specific customizations."
            },
            {
                id: 83,
                text: "A new developer was assigned full DynamoDB access and accidentally deleted production tables. What is the MOST effective way to prevent this from recurring?",
                options: [
                    "Use permissions boundary to control the maximum permissions employees can grant to the IAM principals",
                    "Remove full database access for all IAM users in the organization",
                    "Only root user should have full database access in the organization",
                    "The CTO should review the permissions for each new developer's IAM user so that such incidents don't recur"
                ],
                correct: [0],
                explanation: "A permissions boundary is an advanced IAM feature that sets the maximum permissions an IAM entity (user or role) can have. It acts as a guardrail, preventing users from escalating their own privileges or performing actions beyond what is allowed by the boundary, even if they have permissions to modify IAM policies.",
                focus: "Preventing Privilege Escalation (IAM Permissions Boundary)",
                focusExplanation: "IAM Permissions Boundaries are a key security control for safely delegating permissions. They allow you to set a 'ceiling' on what permissions a user can have or grant, effectively preventing accidental or malicious privilege escalation."
            },
            {
                id: 84,
                text: "A High Performance Computing (HPC) application needs to be deployed on EC2. Which placement group topology should be used for this workload?",
                options: [
                    "The Amazon EC2 instances should be deployed in a cluster placement group so that the underlying workload can benefit from low network latency and high network throughput",
                    "The Amazon EC2 instances should be deployed in a spread placement group so that there are no correlated failures",
                    "The Amazon EC2 instances should be deployed in a partition placement group so that distributed workloads can be handled effectively",
                    "The Amazon EC2 instances should be deployed in an Auto Scaling group so that application meets high availability requirements"
                ],
                correct: [0],
                explanation: "Cluster placement groups are specifically designed for applications that require low network latency and high network throughput between instances. By placing instances physically close to each other in a single Availability Zone, it provides the best performance for tightly-coupled HPC workloads.",
                focus: "EC2 Placement Groups (Cluster)",
                focusExplanation: "Choosing the right placement group is vital for performance. Cluster placement groups are the correct choice for HPC and other applications where internode communication speed is critical. They pack instances together on the same high-performance rack."
            },
            {
                id: 85,
                text: "A new DevOps engineer has joined a company. As an AWS Certified Solutions Architect, which IAM best practices would you recommend? (Select two)",
                options: [
                    "Grant maximum privileges to avoid assigning privileges again",
                    "Configure AWS CloudTrail to log all AWS Identity and Access Management (AWS IAM) actions",
                    "Use user credentials to provide access specific permissions for Amazon EC2 instances",
                    "Create a minimum number of accounts and share these account credentials among employees",
                    "Enable AWS Multi-Factor Authentication (AWS MFA) for privileged users"
                ],
                correct: [1, 4],
                multiSelect: true,
                explanation: "Key IAM best practices include enabling MFA for all users, especially privileged ones, to add a second layer of security. Additionally, all IAM actions should be logged with AWS CloudTrail for auditing, security analysis, and compliance. Granting maximum privileges and sharing credentials are major security anti-patterns. IAM Roles, not user credentials, should be used for EC2 instances.",
                focus: "IAM Best Practices",
                focusExplanation: "Following IAM best practices is foundational to AWS security. Key tenets include enforcing MFA, applying the principle of least privilege, auditing actions with CloudTrail, and using roles for AWS services instead of long-lived user credentials."
            },
            {
                id: 86,
                text: "The solo founder at a tech startup has just created a brand new AWS account. The founder has provisioned an Amazon EC2 instance 1A which is running in AWS Region A. Later, he takes a snapshot of the instance 1A and then creates a new Amazon Machine Image (AMI) in Region A from this snapshot. This AMI is then copied into another Region B. The founder provisions an instance 1B in Region B using this new AMI in Region B. At this point in time, what entities exist in Region B?",
                options: [
                    "1 Amazon EC2 instance and 1 AMI exist in Region B",
                    "1 Amazon EC2 instance and 1 snapshot exist in Region B",
                    "1 Amazon EC2 instance and 2 AMIs exist in Region B",
                    "1 Amazon EC2 instance, 1 AMI and 1 snapshot exist in Region B"
                ],
                correct: [3],
                explanation: "When the new AMI is copied from Region A into Region B, it also creates a snapshot in Region B because AMIs are based on the underlying snapshots. In addition, an instance is created from this AMI in Region B. So, we have 1 Amazon EC2 instance, 1 AMI and 1 snapshot in Region B.",
                focus: "AMI Copy Process & Snapshots",
                focusExplanation: "A key concept is that an AMI is backed by an EBS snapshot. When you copy an AMI to a new region, AWS copies the underlying snapshot as well. This means the new region will contain both the copied AMI and its associated snapshot."
            },
            {
                id: 87,
                text: "A Big Data analytics company wants to set up an AWS cloud architecture that throttles requests in case of sudden traffic spikes. The company is looking for AWS services that can be used for buffering or throttling to handle such traffic variations. Which of the following services can be used to support this requirement?",
                options: [
                    "Elastic Load Balancer, Amazon Simple Queue Service (Amazon SQS), AWS Lambda",
                    "Amazon API Gateway, Amazon Simple Queue Service (Amazon SQS) and Amazon Kinesis",
                    "Amazon Simple Queue Service (Amazon SQS), Amazon Simple Notification Service (Amazon SNS) and AWS Lambda",
                    "Amazon Gateway Endpoints, Amazon Simple Queue Service (Amazon SQS) and Amazon Kinesis"
                ],
                correct: [1],
                explanation: "Amazon API Gateway has built-in request throttling capabilities. Amazon SQS and Amazon Kinesis can both act as buffers, absorbing spikes in traffic and allowing downstream services to process messages at a steady pace.",
                focus: "Throttling and Buffering Services",
                focusExplanation: "To handle traffic spikes, you need services that can either buffer incoming requests (like SQS and Kinesis) or actively throttle them (like API Gateway). Understanding which services provide these capabilities is crucial for designing resilient architectures."
            },
            {
                id: 88,
                text: "A logistics company is building a multi-tier application to track the location of its trucks during peak operating hours. The company wants these data points to be accessible in real-time in its analytics platform via a REST API. Which of the following options addresses the given use case?",
                options: [
                    "Leverage Amazon QuickSight with Amazon Redshift",
                    "Leverage Amazon API Gateway with Amazon Kinesis Data Analytics",
                    "Leverage Amazon API Gateway with AWS Lambda",
                    "Leverage Amazon Athena with Amazon S3"
                ],
                correct: [1],
                explanation: "For the given use case, you can use Amazon API Gateway to create a REST API that handles incoming requests having location data from the trucks and sends it to the Kinesis Data Analytics application on the back end for real-time processing and analysis.",
                focus: "Real-time Analytics Pipeline",
                focusExplanation: "This scenario requires a real-time data ingestion and analytics pipeline. The combination of API Gateway for the REST endpoint and Kinesis Data Analytics for real-time stream processing is a powerful, serverless pattern for such use cases."
            },
            {
                id: 89,
                text: "A blogger creates a 1GB file and stores it in S3 Standard, a 100GB gp2 EBS volume, and an EFS Standard file system. What is the correct order of monthly storage charges, from cheapest to most expensive?",
                options: [
                    "Cost of test file storage on Amazon EFS < Cost of test file storage on Amazon S3 Standard < Cost of test file storage on Amazon EBS",
                    "Cost of test file storage on Amazon S3 Standard < Cost of test file storage on Amazon EFS < Cost of test file storage on Amazon EBS",
                    "Cost of test file storage on Amazon S3 Standard < Cost of test file storage on Amazon EBS < Cost of test file storage on Amazon EFS",
                    "Cost of test file storage on Amazon EBS < Cost of test file storage on Amazon S3 Standard < Cost of test file storage on Amazon EFS"
                ],
                correct: [1],
                explanation: "The key is that you pay for what you provision with EBS. Even though the file is 1GB, you are paying for the full 100GB provisioned EBS volume. S3 and EFS charge for the amount of data actually stored. S3 is generally the cheapest per GB, followed by EFS, and then EBS (when considering provisioned but unused space).",
                focus: "Storage Cost Comparison (S3 vs EFS vs EBS)",
                focusExplanation: "Understanding the pricing models for different storage services is critical for cost optimization. The main takeaway here is that EBS is priced based on provisioned capacity, whereas S3 and EFS are priced based on actual usage. This makes EBS more expensive if you over-provision."
            },
            {
                id: 90,
                text: "To improve security, a company wants to use Amazon GuardDuty. Which of the following are data sources supported by Amazon GuardDuty?",
                options: [
                    "Elastic Load Balancing logs, Domain Name System (DNS) logs, AWS CloudTrail events",
                    "VPC Flow Logs, Domain Name System (DNS) logs, AWS CloudTrail events",
                    "Amazon CloudFront logs, Amazon API Gateway logs, AWS CloudTrail events",
                    "VPC Flow Logs, Amazon API Gateway logs, Amazon S3 access logs"
                ],
                correct: [1],
                explanation: "Amazon GuardDuty analyzes tens of billions of events across multiple core AWS data sources: AWS CloudTrail events (for API activity), Amazon VPC Flow Logs (for network traffic), and DNS logs (for domain resolution behavior).",
                focus: "GuardDuty Data Sources",
                focusExplanation: "Knowing the primary data sources for GuardDuty is essential. It doesn't analyze application logs directly but rather foundational network and API logs: VPC Flow Logs, CloudTrail Logs, and DNS logs to detect threats."
            },
            {
                id: 91,
                text: "A company has 5 Aurora multi-AZ read replicas with failover priority tiers and sizes: tier-1 (16TB), tier-1 (32TB), tier-10 (16TB), tier-15 (16TB), tier-15 (32TB). In a failover, which replica will be promoted?",
                options: [
                    "Tier-10 (16 terabytes)",
                    "Tier-1 (16 terabytes)",
                    "Tier-1 (32 terabytes)",
                    "Tier-15 (32 terabytes)"
                ],
                correct: [2],
                explanation: "In a failover, Aurora promotes the replica with the highest priority (lowest tier number). If multiple replicas share the same priority, it promotes the largest one. Here, two replicas are in tier-1, so Aurora promotes the larger 32TB instance.",
                focus: "Aurora Failover Priority",
                focusExplanation: "Aurora's failover mechanism is deterministic. It first looks for the lowest priority tier number (0-15). If there's a tie, it promotes the largest instance within that tier. Understanding this promotion logic is key to designing predictable disaster recovery strategies."
            },
            {
                id: 92,
                text: "A security consultancy needs to protect S3 data from malicious activity and check for vulnerabilities on EC2 instances. Which services should be used?",
                options: [
                    "Use Amazon Inspector to monitor S3. Use Amazon GuardDuty for EC2 vulnerabilities.",
                    "Use Amazon Inspector for both S3 and EC2.",
                    "Use Amazon GuardDuty for both S3 and EC2.",
                    "Use Amazon GuardDuty to monitor S3. Use Amazon Inspector for EC2 vulnerabilities."
                ],
                correct: [3],
                explanation: "Amazon GuardDuty is a threat detection service that monitors accounts, workloads, and data in S3 for malicious activity. Amazon Inspector is a vulnerability management service that scans EC2 instances and container images for software vulnerabilities and unintended network exposure.",
                focus: "GuardDuty vs. Inspector",
                focusExplanation: "It's crucial to know the difference: GuardDuty is for threat detection (monitoring for *what is happening*), while Inspector is for vulnerability scanning (checking for *what is configured*). GuardDuty monitors S3 data access patterns, and Inspector scans EC2 instances."
            },
            {
                id: 93,
                text: "A media agency stores re-creatable assets on S3. They are accessed frequently for a few days, then rarely but must remain immediately accessible. What is the most cost-effective way to lower storage costs?",
                options: [
                    "Configure a lifecycle policy to transition the objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 7 days",
                    "Configure a lifecycle policy to transition the objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days",
                    "Configure a lifecycle policy to transition the objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days",
                    "Configure a lifecycle policy to transition the objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 7 days"
                ],
                correct: [2],
                explanation: "The minimum storage duration before you can transition objects from S3 Standard to S3 One Zone-IA or S3 Standard-IA is 30 days. Since the assets are re-creatable, the lower durability of S3 One Zone-IA is acceptable, making it the most cost-effective option after the 30-day minimum.",
                focus: "S3 Lifecycle Policies & Cost Optimization",
                focusExplanation: "For cost optimization, matching storage class to access patterns is key. For re-creatable, infrequently accessed data needing instant retrieval, S3 One Zone-IA is the cheapest. You must also know the 30-day minimum duration rule for transitions to IA classes."
            },
            {
                id: 94,
                text: "A research application on a fleet of EC2 instances needs high random I/O performance. The application replicates the dataset across instances, so if an instance fails, it's replaced and data is re-replicated. What is the MOST cost-optimal storage solution?",
                options: [
                    "Use Amazon EC2 instances with access to Amazon S3 based storage",
                    "Use Amazon EC2 instances with Amazon EFS mount points",
                    "Use Amazon Elastic Block Store (Amazon EBS) based EC2 instances",
                    "Use Instance Store based Amazon EC2 instances"
                ],
                correct: [3],
                explanation: "Instance stores provide temporary block-level storage for your instance. This storage is located on disks that are physically attached to the host computer, providing the highest possible I/O performance. Since the application handles its own data replication and is resilient to instance failure, the ephemeral nature of instance stores is acceptable, making it the most cost-optimal and performant choice.",
                focus: "EC2 Instance Store",
                focusExplanation: "Instance stores offer the best I/O performance for EC2 because the storage is physically attached to the host. For workloads that are fault-tolerant and manage their own data persistence (like distributed databases or replication-heavy apps), instance stores are the most performant and cost-effective option."
            },
            {
                id: 95,
                text: "A news network uploads raw video footage to an S3 bucket in the US. Teams in Europe and Asia report long upload delays. What are the MOST cost-effective options to improve upload speed? (Select two)",
                options: [
                    "Use multipart uploads for faster file uploads into the destination Amazon S3 bucket",
                    "Create multiple AWS Site-to-Site VPN connections",
                    "Use Amazon S3 Transfer Acceleration (Amazon S3TA) to enable faster file uploads into the destination S3 bucket",
                    "Use AWS Global Accelerator",
                    "Create multiple AWS Direct Connect connections"
                ],
                correct: [0, 2],
                multiSelect: true,
                explanation: "For large file uploads, multipart upload allows you to upload a single object as a set of parts, which can be uploaded independently and in parallel to improve throughput. S3 Transfer Acceleration uses AWS's globally distributed edge locations to accelerate uploads over long geographic distances.",
                focus: "S3 Data Transfer Optimization",
                focusExplanation: "Two key methods for speeding up S3 uploads are multipart uploads (for parallelism) and S3 Transfer Acceleration (to reduce latency over long distances). Both are cost-effective and easy to implement compared to setting up dedicated network connections."
            },
            {
                id: 96,
                text: "A big data analytics solution uses a staging zone in S3 to store intermediary query results for 24 hours. These results are heavily referenced by other parts of the pipeline. What is the MOST cost-effective storage strategy?",
                options: [
                    "Store the intermediary query results in Amazon S3 Standard storage class",
                    "Store the intermediary query results in Amazon S3 Glacier Instant Retrieval storage class",
                    "Store the intermediary query results in Amazon S3 One Zone-Infrequent Access storage class",
                    "Store the intermediary query results in Amazon S3 Standard-Infrequent Access storage class"
                ],
                correct: [0],
                explanation: "Because the data is heavily referenced (frequently accessed) and only stored for a short duration (24 hours), S3 Standard is the best choice. Infrequent-Access storage classes have a minimum storage duration charge (typically 30 days) and retrieval fees, which would make them more expensive for this short-lived, frequently accessed data.",
                focus: "S3 Cost-Effectiveness for Short-Lived Data",
                focusExplanation: "Choosing a storage class requires considering access frequency, duration, and retrieval costs. For data that is frequently accessed but stored for less than 30 days, S3 Standard is almost always the most cost-effective option because it has no minimum duration fees or retrieval fees."
            },
            {
                id: 97,
                text: "A file-hosting service uses a single S3 bucket. During peak hours (over 5000 requests/sec), uploads fail. What is the MOST resource-efficient and cost-optimal way to fix this?",
                options: [
                    "Change the application architecture to create a new Amazon S3 bucket for each customer",
                    "Change the application architecture to create customer-specific custom prefixes within the single Amazon S3 bucket and then upload the daily files into those prefixed locations",
                    "Change the application architecture to create a new Amazon S3 bucket for each day's data",
                    "Change the application architecture to use Amazon Elastic File System (Amazon EFS) instead of Amazon S3"
                ],
                correct: [1],
                explanation: "Amazon S3 scales automatically to support very high request rates. Performance issues can arise if all requests target a single prefix. By introducing randomness and spreading uploads across multiple prefixes (like customer-specific prefixes), you can leverage the full request rate performance of S3 without needing to create new buckets.",
                focus: "S3 Performance Optimization with Prefixes",
                focusExplanation: "To achieve the best performance from S3, you should spread your requests across many different prefixes. This allows S3 to parallelize requests across its internal partitions. A common pattern is to introduce a random hash or a user ID at the beginning of the object key."
            },
            {
                id: 98,
                text: "An EDA application has 'hot data' that needs fast, parallel, and distributed processing/storage, and 'cold data' for reference with quick, low-cost access. Which service is BEST suited for this?",
                options: [
                    "Amazon FSx for Windows File Server",
                    "Amazon EMR",
                    "Amazon FSx for Lustre",
                    "AWS Glue"
                ],
                correct: [2],
                explanation: "Amazon FSx for Lustre is a high-performance file system designed for workloads like HPC. Crucially, it integrates with Amazon S3, allowing it to serve as a high-performance front-end for 'hot data' while using a linked S3 bucket as a cost-effective, long-term repository for 'cold data'.",
                focus: "High-Performance File Systems (FSx for Lustre)",
                focusExplanation: "FSx for Lustre is the go-to service for high-performance computing (HPC) and data processing workloads. Its tight integration with S3 makes it perfect for architectures that need a fast, parallel file system for active processing and a durable, cheap object store for long-term data."
            },
            {
                id: 99,
                text: "A mobile game needs to stream score updates to a backend processor, process them in order, and store them in a highly available database, with minimal management overhead. Which solution is best?",
                options: [
                    "Push score updates to Amazon Kinesis Data Streams which uses an AWS Lambda function to process these updates and then store these processed updates in Amazon DynamoDB",
                    "Push score updates to an Amazon Simple Notification Service (Amazon SNS) topic, subscribe an AWS Lambda function to this Amazon SNS topic to process the updates and then store these processed updates in a SQL database running on Amazon EC2 instance",
                    "Push score updates to an Amazon Simple Queue Service (Amazon SQS) queue which uses a fleet of Amazon EC2 instances to process these updates and then store these processed updates in an Amazon RDS MySQL database",
                    "Push score updates to Amazon Kinesis Data Streams which uses a fleet of Amazon EC2 instances to process the updates"
                ],
                correct: [0],
                explanation: "This solution is entirely serverless, minimizing management overhead. Kinesis Data Streams can handle massive traffic spikes and preserves the order of records within a shard. AWS Lambda provides serverless processing, and Amazon DynamoDB is a fully managed, highly available NoSQL database.",
                focus: "Serverless Streaming Architecture",
                focusExplanation: "The combination of Kinesis Data Streams (for ordered, real-time ingestion), AWS Lambda (for serverless processing), and DynamoDB (for a managed, scalable database) is a classic and powerful pattern for building event-driven, real-time applications with minimal operational burden."
            },
            {
                id: 100,
                text: "A company enabled AWS Shield Advanced across multiple accounts and found the costs to be higher than expected. What is the most likely reason?",
                options: [
                    "AWS Shield Advanced also covers AWS Shield Standard plan, thereby resulting in increased costs",
                    "AWS Shield Advanced is being used for custom servers, that are not part of AWS Cloud, thereby resulting in increased costs",
                    "Consolidated billing has not been enabled. All the AWS accounts should fall under a single consolidated billing for the monthly fee to be charged only once",
                    "Savings Plans has not been enabled for the AWS Shield Advanced service across all the AWS accounts"
                ],
                correct: [2],
                explanation: "AWS Shield Advanced has a monthly fee that is charged once per organization. If the accounts are not part of an AWS Organization with consolidated billing, each account will be charged the monthly fee separately, leading to unexpectedly high costs.",
                focus: "AWS Shield Advanced Pricing",
                focusExplanation: "Understanding the pricing model for AWS Shield Advanced is key. The monthly fee is applied at the organizational level. To get the benefit of a single monthly fee, all accounts using Shield Advanced must be part of the same AWS Organization."
            },
            {
                id: 101,
                text: "Which feature of an Amazon S3 bucket can only be suspended and not disabled once it has been enabled?",
                options: [
                    "Requester Pays",
                    "Versioning",
                    "Static Website Hosting",
                    "Server Access Logging"
                ],
                correct: [1],
                explanation: "Once you version-enable a bucket, it can never return to an unversioned state. You can suspend versioning to stop creating new object versions, but you cannot permanently disable it and remove the versioning history.",
                focus: "S3 Versioning State",
                focusExplanation: "This is a critical, immutable property of S3 versioning. Once enabled on a bucket, it's a one-way door. You can pause it (suspend), but you can't turn it off and go back to an unversioned state. This is an important detail for compliance and data management."
            },
            {
                id: 102,
                text: "A company is comparing pricing for its dockerized application on Amazon ECS with EC2 launch type vs. Fargate launch type. Which statement is correct?",
                options: [
                    "Both are charged based on EC2 instances and EBS volumes used.",
                    "Amazon ECS with EC2 launch type is charged based on EC2 instances and EBS volumes used. Amazon ECS with Fargate launch type is charged based on vCPU and memory resources that the containerized application requests.",
                    "Both are charged based on ECS usage per hour.",
                    "Both are charged based on vCPU and memory resources requested."
                ],
                correct: [1],
                explanation: "With the EC2 launch type, you manage and pay for the underlying EC2 instances and attached EBS volumes. With the Fargate launch type, you don't manage any servers; you simply define the vCPU and memory required by your tasks and pay for those resources per second.",
                focus: "ECS Launch Types Pricing (EC2 vs. Fargate)",
                focusExplanation: "The fundamental difference in pricing between the two ECS launch types is a key concept. EC2 launch type follows a traditional IaaS model (pay for servers). Fargate follows a serverless model (pay for resources per task)."
            },
            {
                id: 103,
                text: "A dev team noticed a large number of illegal API queries were made during the week. They need an automated solution to trigger near-real-time warnings if this recurs. What is the best solution?",
                options: [
                    "Create an Amazon CloudWatch metric filter that processes AWS CloudTrail logs having API call details and looks at any errors by factoring in all the error codes that need to be tracked. Create an alarm based on this metric's rate to send an Amazon SNS notification to the required team",
                    "Use AWS Trusted Advisor to publish metrics and create an alarm on service limit checks.",
                    "Run Amazon Athena SQL queries against AWS CloudTrail log files stored in Amazon S3 buckets. Use Amazon QuickSight to generate reports.",
                    "Configure AWS CloudTrail to stream event data to Amazon Kinesis. Use stream-level metrics to trigger a Lambda function."
                ],
                correct: [0],
                explanation: "This is the classic pattern for real-time monitoring of API activity. AWS CloudTrail logs the API calls. You can send these logs to CloudWatch Logs, create a metric filter to count specific error codes, and then set a CloudWatch Alarm on that metric to send an SNS notification.",
                focus: "Real-time API Monitoring (CloudTrail & CloudWatch)",
                focusExplanation: "The combination of CloudTrail (for API logging), CloudWatch Logs (for ingestion), CloudWatch Metric Filters (for analysis), and CloudWatch Alarms (for notification) is the standard, most direct way to build automated, near-real-time alerting on specific API activity in your AWS account."
            },
            {
                id: 104,
                text: "A company has a web application that runs 24*7 in the production environment. The development team at the company runs a clone of the same application in the dev environment for up to 8 hours every day. The company wants to build the MOST cost-optimal solution by deploying these applications using the best-fit pricing options for Amazon Elastic Compute Cloud (Amazon EC2) instances. What would you recommend?",
                options: [
                    "Use on-demand Amazon EC2 instances for the production application and spot instances for the dev application",
                    "Use Amazon EC2 reserved instance (RI) for the production application and on-demand instances for the dev application",
                    "Use Amazon EC2 reserved instance (RI) for the production application and spot block instances for the dev application",
                    "Use Amazon EC2 reserved instance (RI) for the production application and spot instances for the dev application"
                ],
                correct: [1],
                explanation: "For the 24/7 production workload, a Reserved Instance (RI) or Savings Plan provides the best cost savings for committed use. For the dev environment which runs for a predictable but non-continuous period (up to 8 hours), On-Demand instances are suitable as they can be started and stopped without any long-term commitment, and they are not subject to interruption like Spot instances.",
                focus: "EC2 Pricing Models",
                focusExplanation: "Matching workload patterns to EC2 pricing models is a core cost optimization skill. Use RIs or Savings Plans for steady, always-on workloads. Use On-Demand for predictable, non-continuous workloads. Use Spot for interruptible, fault-tolerant workloads."
            },
            {
                id: 105,
                text: "A major bank is using Amazon SQS for a core banking application. It expects a peak rate of about 1000 messages per second and it is important that the messages are processed in order. Which of the following options can be used to implement this system?",
                options: [
                    "Use Amazon SQS FIFO (First-In-First-Out) queue in batch mode of 2 messages per operation to process the messages at the peak rate",
                    "Use Amazon SQS FIFO (First-In-First-Out) queue in batch mode of 4 messages per operation to process the messages at the peak rate",
                    "Use Amazon SQS standard queue to process the messages",
                    "Use Amazon SQS FIFO (First-In-First-Out) queue to process the messages"
                ],
                correct: [1],
                explanation: "FIFO queues are required for processing messages in order. A standard FIFO queue supports up to 300 messages per second. To increase this, you must use batching. Throughput increases with batch size. A batch size of 4 would give 300 * 4 = 1200 messages/sec, which meets the 1000 messages/sec requirement.",
                focus: "SQS FIFO Throughput",
                focusExplanation: "SQS FIFO queues guarantee order but have a lower default throughput than standard queues. To increase the throughput of FIFO queues, you must use batching (`SendMessageBatch`, `ReceiveMessageBatch`). The effective throughput is the base rate (300/sec) multiplied by the number of messages per batch operation (up to 10)."
            },
            {
                id: 106,
                text: "An e-commerce company wants to establish a dedicated, encrypted, low latency, and high throughput connection between its data center and AWS Cloud. The team has sufficient time for setup. What would you recommend?",
                options: [
                    "Use AWS site-to-site VPN to establish a connection between the data center and AWS Cloud",
                    "Use AWS Direct Connect to establish a connection between the data center and AWS Cloud",
                    "Use AWS Transit Gateway to establish a connection between the data center and AWS Cloud",
                    "Use AWS Direct Connect plus virtual private network (VPN) to establish a connection between the data center and AWS Cloud"
                ],
                correct: [3],
                explanation: "AWS Direct Connect provides a dedicated, private, low-latency, high-throughput connection. However, traffic over Direct Connect is not encrypted by default. To meet the encryption requirement, you must establish a VPN connection over the Direct Connect link to create an encrypted tunnel.",
                focus: "Secure Hybrid Connectivity",
                focusExplanation: "Direct Connect provides the private, high-performance physical connection, but it does not provide native encryption. To secure the data in transit over a Direct Connect connection, you must layer a VPN on top of it, creating an IPsec tunnel that runs over your private link."
            },
            {
                id: 107,
                text: "A telecom company has thousands of hardware devices sending real-time status data. One application needs this data for notifications, while another analytics application needs to read the same real-time data for analysis. Which solution allows both applications to consume the data concurrently?",
                options: [
                    "Amazon Simple Notification Service (SNS)",
                    "Amazon Simple Queue Service (SQS) with Amazon Simple Email Service (Amazon SES)",
                    "Amazon Kinesis Data Streams",
                    "Amazon Simple Queue Service (SQS) with Amazon Simple Notification Service (SNS)"
                ],
                correct: [2],
                explanation: "Amazon Kinesis Data Streams is designed for this fan-out scenario. It allows multiple consumer applications to read from the same stream of data concurrently and independently. SQS is a queue where a message is typically consumed by only one application.",
                focus: "Real-time Data Streaming (Kinesis Data Streams)",
                focusExplanation: "When you have a single stream of data that needs to be consumed in real-time by multiple independent applications, Kinesis Data Streams is the ideal service. It allows for parallel, independent consumption of the same data stream, a classic 'fan-out' pattern for real-time data."
            },
            {
                id: 108,
                text: "The DevOps team wants to perform maintenance on an EC2 instance within an Auto Scaling group. When they patch it, the health check fails, and the ASG replaces it. What are the two MOST efficient ways to complete the maintenance?",
                options: [
                    "Suspend the ReplaceUnhealthy process type for the Auto Scaling group and apply the maintenance patch to the instance. Once the instance is ready, you can manually set the instance's health status back to healthy and activate the ReplaceUnhealthy process type again",
                    "Take a snapshot of the instance, create a new Amazon Machine Image (AMI) and then launch a new instance using this AMI. Apply the maintenance patch to this new instance and then add it back to the Auto Scaling Group by using the manual scaling policy. Terminate the earlier instance that had the maintenance issue",
                    "Put the instance into the Standby state and then update the instance by applying the maintenance patch. Once the instance is ready, you can exit the Standby state and then return the instance to service",
                    "Delete the Auto Scaling group and apply the maintenance fix to the given instance. Create a new Auto Scaling group and add all the instances again using the manual scaling policy",
                    "Suspend the ScheduledActions process type for the Auto Scaling group and apply the maintenance patch to the instance. Once the instance is ready, you can you can manually set the instance's health status back to healthy and activate the ScheduledActions process type again"
                ],
                correct: [0, 2],
                multiSelect: true,
                explanation: "Both putting an instance into `Standby` state and suspending the `ReplaceUnhealthy` process prevent the Auto Scaling group from terminating the instance while you perform maintenance. `Standby` removes the instance from the ALB and stops health checks on it. Suspending the process is a broader action that stops all unhealthy replacements for the entire group. Both are valid and efficient ways to perform maintenance on a single instance within an ASG.",
                focus: "Auto Scaling Group Maintenance",
                focusExplanation: "Performing maintenance on a single instance in an active Auto Scaling group requires temporarily preventing the ASG from replacing it. The two primary methods are putting the specific instance into the `Standby` state or suspending the `ReplaceUnhealthy` process for the entire group."
            },
            {
                id: 109,
                text: "A financial institution has petabytes of data on an on-premises Microsoft Distributed File System (DFS). They want to move to a hybrid cloud environment and run analytics workloads that support DFS. Which AWS service facilitates this?",
                options: [
                    "Amazon FSx for Windows File Server",
                    "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD)",
                    "Amazon FSx for Lustre",
                    "Microsoft SQL Server on AWS"
                ],
                correct: [0],
                explanation: "Amazon FSx for Windows File Server provides a fully managed native Windows file system. It directly supports Microsoft's Distributed File System (DFS), making it the ideal choice for migrating workloads that rely on DFS Namespaces and DFS Replication.",
                focus: "Managed Windows File System (FSx for Windows)",
                focusExplanation: "For migrating Windows-based file workloads, choosing a service with native compatibility is key. FSx for Windows File Server is designed as a drop-in replacement for on-premises Windows file servers, including support for core features like DFS, SMB, and Active Directory integration."
            },
            {
                id: 110,
                text: "A US-based company with a dynamic website on on-premises servers wants to optimize loading times for new users in Asia. The backend must remain in the US, and an immediate solution is needed. What would you recommend?",
                options: [
                    "Use Amazon CloudFront with a custom origin pointing to the DNS record of the website on Amazon Route 53",
                    "Use Amazon CloudFront with a custom origin pointing to the on-premises servers",
                    "Migrate the website to Amazon S3. Use S3 cross-region replication (S3 CRR) between AWS Regions in the US and Asia",
                    "Leverage a Amazon Route 53 geo-proximity routing policy pointing to on-premises servers"
                ],
                correct: [1],
                explanation: "Amazon CloudFront is a CDN that can cache content at edge locations around the world. By configuring the on-premises servers as a custom origin, CloudFront can cache the website's content in Asia, dramatically reducing latency for users there, without requiring any changes to the backend infrastructure.",
                focus: "CDN with Custom Origin (CloudFront)",
                focusExplanation: "A key feature of CloudFront is its ability to use any publicly accessible HTTP endpoint as a 'custom origin'. This allows you to put a CDN in front of on-premises infrastructure to accelerate content delivery globally without migrating the backend."
            },
            {
                id: 111,
                text: "A company uses DynamoDB and wants to add a caching layer to support high read volumes. Which two AWS services would you recommend as a caching layer?",
                options: [
                    "Amazon Relational Database Service (Amazon RDS)",
                    "Amazon Redshift",
                    "Amazon ElastiCache",
                    "Amazon DynamoDB Accelerator (DAX)",
                    "Amazon OpenSearch Service"
                ],
                correct: [2, 3],
                multiSelect: true,
                explanation: "DAX is a fully managed, in-memory cache specifically for DynamoDB, making it an ideal, tightly integrated choice. Amazon ElastiCache (using Redis or Memcached) is a general-purpose in-memory caching service that can also be used as a caching layer in front of DynamoDB, though it requires more application logic to manage the cache.",
                focus: "Caching for DynamoDB",
                focusExplanation: "When you need to add a caching layer to DynamoDB, you have two primary options. DAX is the purpose-built, transparent caching layer that requires minimal code changes. ElastiCache is a more general-purpose caching service that offers more flexibility but requires you to manage cache invalidation and population in your application code."
            },
            {
                id: 112,
                text: "A European football league grants US distribution rights for live streaming. The distributor must ensure only users from the USA can watch. Which two options enforce this restriction?",
                options: [
                    "Use Amazon Route 53 based failover routing policy to restrict distribution of content to only the locations in which you have distribution rights",
                    "Use georestriction to prevent users in specific geographic locations from accessing content that you're distributing through a Amazon CloudFront web distribution",
                    "Use Amazon Route 53 based weighted routing policy to restrict distribution of content to only the locations in which you have distribution rights",
                    "Use Amazon Route 53 based geolocation routing policy to restrict distribution of content to only the locations in which you have distribution rights",
                    "Use Amazon Route 53 based latency-based routing policy to restrict distribution of content to only the locations in which you have distribution rights"
                ],
                correct: [1, 3],
                multiSelect: true,
                explanation: "You can restrict content at two levels. CloudFront's georestriction feature can block requests from specific countries at the CDN edge. Alternatively, Route 53's geolocation routing policy can resolve DNS queries differently based on the user's location, directing users from allowed countries to the content and users from other countries elsewhere.",
                focus: "Geographic Content Restriction",
                focusExplanation: "There are two primary ways to implement geographic restrictions on AWS. CloudFront geo-restriction blocks requests at the edge, which is very effective. Route 53 geolocation routing controls access at the DNS level. Using both can provide a defense-in-depth strategy."
            },
            {
                id: 113,
                text: "A new DevOps engineer wants to understand the replication capabilities for RDS Multi-AZ vs. Read Replicas. Which statement is correct?",
                options: [
                    "Multi-AZ follows asynchronous replication and spans one Availability Zone (AZ) within a single region. Read replicas follow synchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region",
                    "Multi-AZ follows asynchronous replication and spans at least two Availability Zones (AZs) within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region",
                    "Multi-AZ follows synchronous replication and spans at least two Availability Zones (AZs) within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region",
                    "Multi-AZ follows asynchronous replication and spans at least two Availability Zones (AZs) within a single region. Read replicas follow synchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region"
                ],
                correct: [2],
                explanation: "Multi-AZ deployments use synchronous replication to a standby instance in a different AZ for high availability. This ensures data is written to both places before a transaction is confirmed. Read replicas use asynchronous replication, which minimizes the performance impact on the primary instance but means there can be a small replication lag.",
                focus: "RDS Replication (Synchronous vs. Asynchronous)",
                focusExplanation: "Understanding the difference between Multi-AZ and Read Replicas is a fundamental RDS concept. Multi-AZ is for High Availability (using synchronous replication). Read Replicas are for Read Scalability (using asynchronous replication)."
            },
            {
                id: 114,
                text: "An e-commerce company has a spreadsheet on an EFS file system in us-east-1. Teams in Europe and Asia need to collaborate on this file. What is the best way to enable this?",
                options: [
                    "The spreadsheet will have to be copied in Amazon S3 which can then be accessed from any AWS region",
                    "The spreadsheet on the Amazon Elastic File System (Amazon EFS) can be accessed in other AWS regions by using an inter-region VPC peering connection",
                    "The spreadsheet will have to be copied into Amazon EFS file systems of other AWS regions as Amazon EFS is a regional service and it does not allow access from other AWS regions",
                    "The spreadsheet data will have to be moved into an Amazon RDS for MySQL database which can then be accessed from any AWS region"
                ],
                correct: [1],
                explanation: "Although EFS is a regional service, you can access it from other regions. By setting up an inter-region VPC peering connection, you can route traffic from a VPC in another region to the VPC where the EFS mount target exists, allowing EC2 instances in the peered VPC to mount and access the file system.",
                focus: "Cross-Region EFS Access",
                focusExplanation: "While EFS is a regional service, it is not isolated. By using network connectivity solutions like Inter-Region VPC Peering or Transit Gateway, you can enable clients in other regions to access an EFS file system, creating a shared file system for a global application."
            },
            {
                id: 115,
                text: "A company has a data processing workflow that takes 60 minutes, can withstand disruptions, and can be started and stopped. What is the most cost-effective solution?",
                options: [
                    "Use Amazon EC2 on-demand instances to run the workflow processes",
                    "Use Amazon EC2 spot instances to run the workflow processes",
                    "Use Amazon EC2 reserved instances to run the workflow processes",
                    "Use AWS Lambda function to run the workflow processes"
                ],
                correct: [1],
                explanation: "Spot instances offer the largest discounts on EC2 compute capacity. Since the workload is fault-tolerant and can withstand disruptions, it is a perfect candidate for Spot instances, making it the most cost-effective solution.",
                focus: "EC2 Purchase Options (Spot Instances)",
                focusExplanation: "Spot Instances are the key to extreme cost savings on EC2. They are ideal for any workload that is fault-tolerant, stateless, or can be interrupted and resumed. Data processing jobs are a classic use case for Spot."
            },
            {
                id: 116,
                text: "A gaming company with an Aurora database in the US is expanding to Europe and Asia. The 'games' table needs to be global, but 'users' and 'games_played' tables must be regional. How can this be done with minimal refactoring?",
                options: [
                    "Use a Amazon DynamoDB global table for the games table and use Amazon Aurora for the users and games_played tables",
                    "Use an Amazon Aurora Global Database for the games table and use Amazon DynamoDB tables for the users and games_played tables",
                    "Use an Amazon Aurora Global Database for the games table and use Amazon Aurora for the users and games_played tables",
                    "Use a Amazon DynamoDB global table for the games table and use Amazon DynamoDB tables for the users and games_played tables"
                ],
                correct: [2],
                explanation: "To minimize refactoring, you should stick with the same database engine (Aurora). You can create an Aurora Global Database for the `games` table to provide low-latency reads globally. For the regional tables (`users`, `games_played`), you can use standard regional Aurora clusters in each respective region.",
                focus: "Global Database Architecture (Aurora Global Database)",
                focusExplanation: "Aurora Global Database is designed for applications that need fast local reads in multiple regions while maintaining a single primary write region. This question tests the ability to apply this service for specific global tables while keeping other tables regional, all within the same database engine to minimize code changes."
            },
            {
                id: 117,
                text: "A healthcare startup needs to protect objects in S3 from accidental deletion to meet compliance guidelines. What are two recommendations to address this?",
                options: [
                    "Enable versioning on the Amazon S3 bucket",
                    "Establish a process to get managerial approval for deleting Amazon S3 objects",
                    "Enable multi-factor authentication (MFA) delete on the Amazon S3 bucket",
                    "Change the configuration on Amazon S3 console so that the user needs to provide additional confirmation while deleting any Amazon S3 object",
                    "Create an event trigger on deleting any Amazon S3 object. The event invokes an Amazon Simple Notification Service (Amazon SNS) notification via email to the IT manager"
                ],
                correct: [0, 2],
                multiSelect: true,
                explanation: "Versioning protects against accidental deletion by creating a new version of an object (a delete marker) instead of permanently removing it. MFA Delete adds another layer of security by requiring a second factor of authentication (an MFA code) to permanently delete an object version, preventing accidental or malicious deletions.",
                focus: "S3 Data Protection",
                focusExplanation: "Versioning and MFA Delete are the two primary technical controls within S3 to protect against accidental object deletion. Versioning preserves all object versions, while MFA Delete makes permanent deletion a much more deliberate and secure process."
            },
            {
                id: 118,
                text: "A video analytics organization has been acquired by a leading media company. The analytics organization has 10 independent applications with an on-premises data footprint of about 70 Terabytes for each application. The CTO of the media company has set a timeline of two weeks to carry out the data migration from on-premises data center to AWS Cloud and establish connectivity. Which of the following are the MOST cost-effective options for completing the data transfer and establishing connectivity? (Select two)",
                options: [
                    "Setup AWS Site-to-Site VPN to establish on-going connectivity between the on-premises data center and AWS Cloud",
                    "Order 10 AWS Snowball Edge Storage Optimized devices to complete the one-time data transfer",
                    "Order 70 AWS Snowball Edge Storage Optimized devices to complete the one-time data transfer",
                    "Order 1 AWS Snowmobile to complete the one-time data transfer",
                    "Setup AWS Direct Connect to establish connectivity between the on-premises data center and AWS Cloud"
                ],
                correct: [0, 1],
                multiSelect: true,
                explanation: "For large data transfers (70TB x 10 = 700TB) with a tight deadline, Snowball is ideal. 10 Snowball Edge devices (each can hold ~80TB) are sufficient. For ongoing connectivity, a Site-to-Site VPN is faster to set up and more cost-effective than Direct Connect for this immediate need.",
                focus: "Large-Scale Data Migration & Connectivity",
                focusExplanation: "For massive, one-time data transfers, physical appliances like AWS Snowball are often faster and cheaper than transferring over the internet. For establishing ongoing network connectivity quickly, a Site-to-Site VPN is the standard choice, while Direct Connect is a longer-term, more involved process."
            },
            {
                id: 119,
                text: "The payroll department at a company initiates several computationally intensive workloads on Amazon EC2 instances at a designated hour on the last day of every month. The payroll department has noticed a trend of severe performance lag during this hour. The engineering team has figured out a solution by using Auto Scaling Group for these Amazon EC2 instances and making sure that 10 Amazon EC2 instances are available during this peak usage hour. For normal operations only 2 Amazon EC2 instances are enough to cater to the workload. As a solutions architect, which of the following steps would you recommend to implement the solution?",
                options: [
                    "Configure your Auto Scaling group by creating a target tracking policy and setting the instance count to 10 at the designated hour. This causes the scale-out to happen before peak traffic kicks in at the designated hour",
                    "Configure your Auto Scaling group by creating a scheduled action that kicks-off at the designated hour on the last day of the month. Set the min count as well as the max count of instances to 10. This causes the scale-out to happen before peak traffic kicks in at the designated hour",
                    "Configure your Auto Scaling group by creating a scheduled action that kicks-off at the designated hour on the last day of the month. Set the desired capacity of instances to 10. This causes the scale-out to happen before peak traffic kicks in at the designated hour",
                    "Configure your Auto Scaling group by creating a simple tracking policy and setting the instance count to 10 at the designated hour. This causes the scale-out to happen before peak traffic kicks in at the designated hour"
                ],
                correct: [2],
                explanation: "Scheduled scaling is designed for predictable load changes. You can configure a scheduled action to change the desired capacity of your Auto Scaling group at a specific time. Setting the desired capacity to 10 ensures that exactly 10 instances will be running before the peak workload begins.",
                focus: "Auto Scaling Scheduled Actions",
                focusExplanation: "When you have a predictable, recurring traffic pattern (e.g., end-of-month processing), scheduled scaling is the most efficient and reliable way to prepare your infrastructure. It allows you to proactively scale out to a specific capacity before the load hits, ensuring performance."
            },
            {
                id: 120,
                text: "A software engineering intern at an e-commerce company is documenting the process flow to provision Amazon EC2 instances via the Amazon EC2 API. These instances are to be used for an internal application that processes Human Resources payroll data. He wants to highlight those volume types that cannot be used as a boot volume. Can you help the intern by identifying those storage volume types that CANNOT be used as boot volumes while creating the instances? (Select two)",
                options: [
                    "Cold Hard disk drive (sc1)",
                    "Provisioned IOPS Solid state drive (io1)",
                    "Instance Store",
                    "General Purpose Solid State Drive (gp2)",
                    "Throughput Optimized Hard disk drive (st1)"
                ],
                correct: [0, 4],
                multiSelect: true,
                explanation: "The HDD-based EBS volumes, Throughput Optimized HDD (st1) and Cold HDD (sc1), are designed for large, sequential workloads and are optimized for throughput, not the small, random I/O characteristic of a boot volume. Therefore, they cannot be used as boot volumes.",
                focus: "EBS Boot Volumes",
                focusExplanation: "Not all EBS volume types can be used as a boot volume for an EC2 instance. Only the SSD-based volumes (gp2, gp3, io1, io2) and the Magnetic (standard) volume type are supported for booting. The HDD-based throughput-optimized volumes (st1, sc1) are not."
            },
            {
                id: 121,
                text: "A data analytics company measures what the consumers watch and what advertising they're exposed to. This real-time data is ingested into its on-premises data center and subsequently, the daily data feed is compressed into a single file and uploaded on Amazon S3 for backup. The typical compressed file size is around 2 gigabytes. Which of the following is the fastest way to upload the daily compressed file into Amazon S3?",
                options: [
                    "Upload the compressed file using multipart upload",
                    "Upload the compressed file in a single operation",
                    "FTP the compressed file into an Amazon EC2 instance that runs in the same region as the Amazon S3 bucket. Then transfer the file from the Amazon EC2 instance into the Amazon S3 bucket",
                    "Upload the compressed file using multipart upload with Amazon S3 Transfer Acceleration (Amazon S3TA)"
                ],
                correct: [3],
                explanation: "For large files (like 2GB) uploaded over a distance, combining multipart upload with S3 Transfer Acceleration is the fastest method. Multipart upload improves throughput by uploading parts in parallel, and Transfer Acceleration reduces latency by routing the upload through the nearest AWS edge location.",
                focus: "S3 Upload Optimization",
                focusExplanation: "To maximize S3 upload speed for large files, especially over long distances, you should use two features in tandem: multipart upload to get parallelization benefits, and S3 Transfer Acceleration to minimize network latency by using the AWS global network."
            },
            {
                id: 122,
                text: "The IT department at a consulting firm is conducting a training workshop for new developers. As part of an evaluation exercise on Amazon S3, the new developers were asked to identify the invalid storage class lifecycle transitions for objects stored on Amazon S3. Can you spot the INVALID lifecycle transitions from the options below? (Select two)",
                options: [
                    "Amazon S3 Standard-IA => Amazon S3 One Zone-IA",
                    "Amazon S3 Intelligent-Tiering => Amazon S3 Standard",
                    "Amazon S3 One Zone-IA => Amazon S3 Standard-IA",
                    "Amazon S3 Standard => Amazon S3 Intelligent-Tiering",
                    "Amazon S3 Standard-IA => Amazon S3 Intelligent-Tiering"
                ],
                correct: [1, 2],
                multiSelect: true,
                explanation: "You cannot transition objects 'up' to a more expensive or more durable tier, like from Intelligent-Tiering back to Standard, or from One Zone-IA to Standard-IA. Lifecycle policies are designed for moving data to colder, less expensive storage tiers over time.",
                focus: "S3 Lifecycle Transitions",
                focusExplanation: "S3 lifecycle transitions generally flow in one direction: from hotter, more expensive storage classes to colder, cheaper ones. You cannot, for example, transition an object from S3 Standard-IA back to S3 Standard via a lifecycle policy. Knowing the valid transition paths is key to S3 data management."
            },
            {
                id: 123,
                text: "An audit department generates and accesses the audit reports only twice in a financial year. The department uses AWS Step Functions to orchestrate the report creating process that has failover and retry scenarios built into the solution. The underlying data to create these audit reports is stored on Amazon S3, runs into hundreds of Terabytes and should be available with millisecond latency. As an AWS Certified Solutions Architect – Associate, which is the MOST cost-effective storage class that you would recommend to be used for this use-case?",
                options: [
                    "Amazon S3 Glacier Deep Archive",
                    "Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)",
                    "Amazon S3 Standard",
                    "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)"
                ],
                correct: [3],
                explanation: "S3 Standard-IA is designed for data that is accessed infrequently but requires rapid (millisecond) access when needed. It has a lower storage cost than S3 Standard, making it perfect for this use case where data is accessed only twice a year but must be available immediately.",
                focus: "S3 Storage Classes (Infrequent Access)",
                focusExplanation: "The key to this question is balancing infrequent access with the need for immediate retrieval. S3 Standard-IA is the purpose-built storage class for this scenario, offering lower storage costs than S3 Standard but with the same low-latency performance. Glacier options would not provide millisecond access."
            },
            {
                id: 124,
                text: "A US-based healthcare startup is building an interactive diagnostic tool for COVID-19 related assessments. The users would be required to capture their personal health records via this tool. As this is sensitive health information, the backup of the user data must be kept encrypted in Amazon Simple Storage Service (Amazon S3). The startup does not want to provide its own encryption keys but still wants to maintain an audit trail of when an encryption key was used and by whom. Which of the following is the BEST solution for this use-case?",
                options: [
                    "Use server-side encryption with Amazon S3 managed keys (SSE-S3) to encrypt the user data on Amazon S3",
                    "Use server-side encryption with AWS Key Management Service keys (SSE-KMS) to encrypt the user data on Amazon S3",
                    "Use server-side encryption with customer-provided keys (SSE-C) to encrypt the user data on Amazon S3",
                    "Use client-side encryption with client provided keys and then upload the encrypted user data to Amazon S3"
                ],
                correct: [1],
                explanation: "SSE-KMS meets both requirements. AWS manages the keys (the customer doesn't provide them), and all usage of KMS keys is logged in AWS CloudTrail. This provides a detailed audit trail of who used which key to access which object, which is not available with SSE-S3.",
                focus: "S3 Encryption with Auditing (SSE-KMS)",
                focusExplanation: "When you need server-side encryption with an audit trail, SSE-KMS is the correct choice. The key differentiator between SSE-S3 and SSE-KMS is that KMS usage is auditable via CloudTrail, which is a critical feature for compliance and security monitoring."
            },
            {
                id: 125,
                text: "A leading carmaker would like to build a new car-as-a-sensor service by leveraging fully serverless components that are provisioned and managed automatically by AWS. The development team at the carmaker does not want an option that requires the capacity to be manually provisioned, as it does not want to respond manually to changing volumes of sensor data. Given these constraints, which of the following solutions is the BEST fit to develop this car-as-a-sensor service?",
                options: [
                    "Ingest the sensor data in Amazon Kinesis Data Streams, which is polled by an application running on an Amazon EC2 instance and the data is written into an auto-scaled Amazon DynamoDB table for downstream processing",
                    "Ingest the sensor data in Amazon Kinesis Data Firehose, which directly writes the data into an auto-scaled Amazon DynamoDB table for downstream processing",
                    "Ingest the sensor data in an Amazon Simple Queue Service (Amazon SQS) standard queue, which is polled by an AWS Lambda function in batches and the data is written into an auto-scaled Amazon DynamoDB table for downstream processing",
                    "Ingest the sensor data in an Amazon Simple Queue Service (Amazon SQS) standard queue, which is polled by an application running on an Amazon EC2 instance and the data is written into an auto-scaled Amazon DynamoDB table for downstream processing"
                ],
                correct: [2],
                explanation: "This solution is fully serverless and requires no manual capacity management. SQS provides a durable, scalable buffer for incoming sensor data. Lambda can process messages from the queue in batches automatically. DynamoDB with on-demand capacity auto-scales to handle the writes. EC2-based solutions would violate the 'fully serverless' requirement.",
                focus: "Serverless Ingestion Pipeline (SQS + Lambda + DynamoDB)",
                focusExplanation: "The combination of SQS for buffering, Lambda for processing, and DynamoDB for storage is a classic, powerful, and fully serverless pattern for building scalable event-driven applications. It automatically handles variations in traffic volume with minimal operational overhead."
            },
            {
                id: 126,
                text: "A company manages a multi-tier social media application that runs on Amazon Elastic Compute Cloud (Amazon EC2) instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones (AZs) and use an Amazon Aurora database. As an AWS Certified Solutions Architect – Associate, you have been tasked to make the application more resilient to periodic spikes in request rates. Which of the following solutions would you recommend for the given use-case? (Select two)",
                options: [
                    "Use AWS Global Accelerator",
                    "Use AWS Direct Connect",
                    "Use Amazon Aurora Replica",
                    "Use AWS Shield",
                    "Use Amazon CloudFront distribution in front of the Application Load Balancer"
                ],
                correct: [2, 4],
                multiSelect: true,
                explanation: "To handle read traffic spikes on the database, adding Aurora Replicas allows you to offload read queries from the primary instance. To handle spikes on the web tier, putting a CloudFront distribution in front of the ALB allows you to cache static and dynamic content at the edge, reducing the number of requests that hit your application servers.",
                focus: "Web Application Scalability",
                focusExplanation: "Improving resiliency to traffic spikes requires addressing both the database and web tiers. Aurora Read Replicas scale the database read capacity. CloudFront provides a caching layer to absorb and offload requests from the application servers. Together, they provide a robust solution."
            },
            {
                id: 127,
                text: "The product team at a startup has figured out a market need to support both stateful and stateless client-server communications via the application programming interface (APIs) developed using its platform. You have been hired by the startup as a solutions architect to build a solution to fulfill this market need using Amazon API Gateway. Which of the following would you identify as correct?",
                options: [
                    "Amazon API Gateway creates RESTful APIs that enable stateful client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateless, full-duplex communication between client and server",
                    "Amazon API Gateway creates RESTful APIs that enable stateless client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateless, full-duplex communication between client and server",
                    "Amazon API Gateway creates RESTful APIs that enable stateful client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateful, full-duplex communication between client and server",
                    "Amazon API Gateway creates RESTful APIs that enable stateless client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateful, full-duplex communication between client and server"
                ],
                correct: [3],
                explanation: "RESTful APIs, built over HTTP, are inherently stateless; each request from a client to a server must contain all of the information needed to understand and complete the request. WebSocket APIs, on the other hand, establish a persistent connection between client and server, enabling stateful, full-duplex communication.",
                focus: "API Gateway: Stateful vs. Stateless",
                focusExplanation: "It is crucial to understand the nature of the protocols API Gateway manages. RESTful APIs over HTTP are stateless. WebSocket APIs provide a persistent, two-way communication channel, which is stateful. API Gateway supports both, allowing you to build a wide range of applications."
            },
            {
                id: 128,
                text: "A junior scientist working with the Deep Space Research Laboratory at NASA is trying to upload a high-resolution image of a nebula into Amazon S3. The image size is approximately 3 gigabytes. The junior scientist is using Amazon S3 Transfer Acceleration (Amazon S3TA) for faster image upload. It turns out that Amazon S3TA did not result in an accelerated transfer. Given this scenario, which of the following is correct regarding the charges for this image transfer?",
                options: [
                    "The junior scientist needs to pay both S3 transfer charges and S3TA transfer charges for the image upload",
                    "The junior scientist does not need to pay any transfer charges for the image upload",
                    "The junior scientist only needs to pay S3TA transfer charges for the image upload",
                    "The junior scientist only needs to pay Amazon S3 transfer charges for the image upload"
                ],
                correct: [1],
                explanation: "There are no data transfer IN charges for S3 from the internet. Additionally, with S3 Transfer Acceleration, you only pay the extra S3TA fee if the transfer is actually accelerated compared to a standard S3 upload. Since it was not accelerated, there are no charges for S3TA or standard data transfer.",
                focus: "S3 Transfer Acceleration Pricing",
                focusExplanation: "A key aspect of S3 Transfer Acceleration pricing is that you are not charged the premium if it doesn't provide a benefit. AWS compares the S3TA transfer to a standard S3 transfer and only applies the S3TA fee if it's faster. Data transfer into S3 from the internet is free anyway."
            },
            {
                id: 129,
                text: "A company is in the process of migrating its on-premises SMB file shares to AWS so the company can get out of the business of managing multiple file servers across dozens of offices. The company has 200 terabytes of data in its file servers. The existing on-premises applications and native Windows workloads should continue to have low latency access to this data which needs to be stored on a file system service without any disruptions after the migration. The company also wants any new applications deployed on AWS to have access to this migrated data. Which of the following is the best solution to meet this requirement?",
                options: [
                    "Use AWS Storage Gateway's File Gateway to provide low-latency, on-premises access to fully managed file shares in Amazon S3. The applications deployed on AWS can access this data directly from Amazon S3",
                    "Use Amazon FSx File Gateway to provide low-latency, on-premises access to fully managed file shares in Amazon FSx for Windows File Server. The applications deployed on AWS can access this data directly from Amazon FSx in AWS",
                    "Use Amazon FSx File Gateway to provide low-latency, on-premises access to fully managed file shares in Amazon EFS. The applications deployed on AWS can access this data directly from Amazon EFS",
                    "Use Amazon Storage Gateway's File Gateway to provide low-latency, on-premises access to fully managed file shares in Amazon FSx for Windows File Server. The applications deployed on AWS can access this data directly from Amazon FSx in AWS"
                ],
                correct: [1],
                explanation: "Amazon FSx File Gateway is the purpose-built service for this scenario. It provides a local cache for low-latency on-premises access to SMB shares, while the authoritative data is stored in a fully managed Amazon FSx for Windows File Server file system in the cloud. Applications running in AWS can then access this same file system natively.",
                focus: "Hybrid File Storage (Amazon FSx File Gateway)",
                focusExplanation: "FSx File Gateway is a specific type of Storage Gateway designed to provide on-premises access to Amazon FSx for Windows File Server. This creates a seamless hybrid experience, giving local users cached performance while centralizing file data in a managed AWS service."
            },
            {
                id: 130,
                text: "A retail company has developed a REST API which is deployed in an Auto Scaling group behind an Application Load Balancer. The REST API stores the user data in Amazon DynamoDB and any static content, such as images, are served via Amazon Simple Storage Service (Amazon S3). On analyzing the usage trends, it is found that 90% of the read requests are for commonly accessed data across all users. As a Solutions Architect, which of the following would you suggest as the MOST efficient solution to improve the application performance?",
                options: [
                    "Enable Amazon DynamoDB Accelerator (DAX) for Amazon DynamoDB and Amazon CloudFront for Amazon S3",
                    "Enable ElastiCache Redis for DynamoDB and Amazon CloudFront for Amazon S3",
                    "Enable ElastiCache Redis for DynamoDB and ElastiCache Memcached for Amazon S3",
                    "Enable Amazon DynamoDB Accelerator (DAX) for Amazon DynamoDB and ElastiCache Memcached for Amazon S3"
                ],
                correct: [0],
                explanation: "For the DynamoDB database, DAX is the most efficient caching solution as it's a purpose-built, fully managed in-memory cache for DynamoDB. For the static content in S3, Amazon CloudFront is the standard CDN service used to cache content at edge locations closer to users, improving performance.",
                focus: "Caching Strategy for Web Applications",
                focusExplanation: "A comprehensive caching strategy addresses both the database and static asset layers. DAX is the native, integrated caching solution for DynamoDB. CloudFront is the native CDN and caching solution for S3. Using both provides a highly efficient and performant architecture."
            },
            {
                id: 131,
                text: "As part of a pilot program, a biotechnology company wants to integrate data files from its on-premises analytical application with AWS Cloud via an NFS interface. Which of the following AWS service is the MOST efficient solution for the given use-case?",
                options: [
                    "AWS Storage Gateway - File Gateway",
                    "AWS Storage Gateway - Volume Gateway",
                    "AWS Site-to-Site VPN",
                    "AWS Storage Gateway - Tape Gateway"
                ],
                correct: [0],
                explanation: "AWS Storage Gateway's File Gateway presents a standard file interface (NFS or SMB) to on-premises applications, while storing the data durably in Amazon S3. This allows you to integrate existing file-based applications with cloud storage without any code changes.",
                focus: "Hybrid File Storage (File Gateway)",
                focusExplanation: "File Gateway is the component of the Storage Gateway service that provides file-based (NFS/SMB) access to S3. It's the go-to solution when you need to connect an on-premises application that uses a standard file protocol to AWS cloud storage."
            },
            {
                id: 132,
                text: "A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud. Which solution will meet these requirements?",
                options: [
                    "Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC.",
                    "Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.",
                    "Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC.",
                    "Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC."
                ],
                correct: [2],
                explanation: "AWS Network Firewall is a managed firewall service that provides filtering for both inbound and outbound network traffic. It allows you to create rules for traffic inspection and filtering, which can help protect your production VPC. GuardDuty is for threat detection, Traffic Mirroring copies traffic, and Firewall Manager is for central management of firewalls, not direct filtering.",
                focus: "AWS Network Firewall",
                focusExplanation: "The key requirement is to replicate an on-premises inspection server that performs traffic flow inspection and filtering. AWS Network Firewall is a stateful, managed network firewall and intrusion prevention service designed for this exact purpose within a VPC."
            },
            {
                id: 133,
                text: "A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database. During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort. Which solution will meet these requirements?",
                options: [
                    "Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.",
                    "Change the platform from Aurora to Amazon DynamoDB. Provision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.",
                    "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).",
                    "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue."
                ],
                correct: [3],
                explanation: "The initial design has a bottleneck where the Lambda function is overwhelmed by high data volumes. Decoupling the process with Amazon SQS solves this. The first Lambda function can quickly receive data via API Gateway and place it into an SQS queue. A second Lambda function can then process messages from the queue at a controlled pace, allowing it to write to the Aurora database without being overloaded. This improves scalability and resilience.",
                focus: "Decoupling with SQS",
                focusExplanation: "Decoupling the data ingestion from the database writing process using SQS is a classic pattern for scalability. The API Gateway and initial Lambda can handle bursty traffic by quickly pushing messages to the queue. The second Lambda function can then process these messages at a steady rate that the database can handle, preventing overload and ensuring data is not lost."
            },
            {
                id: 134,
                text: "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. What should a solutions architect do to accomplish this goal?",
                options: [
                    "Turn on AWS Config with the appropriate rules.",
                    "Turn on AWS Trusted Advisor with the appropriate checks.",
                    "Turn on Amazon Inspector with the appropriate assessment template.",
                    "Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events)."
                ],
                correct: [0],
                explanation: "AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. You can use AWS Config to monitor and record changes to the configuration of your Amazon S3 buckets. By turning on AWS Config and enabling the appropriate rules, you can ensure that your S3 buckets do not have unauthorized configuration changes.",
                focus: "AWS Config for Compliance",
                focusExplanation: "For ensuring compliance and tracking configuration changes, AWS Config is the designated service. It provides a detailed view of the configuration of AWS resources and can evaluate these configurations against desired policies. Trusted Advisor gives recommendations, Inspector checks for vulnerabilities, and S3 access logging tracks requests, not configuration changes."
            },
            {
                id: 135,
                text: "A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege. Which solution will meet these requirements?",
                options: [
                    "Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.",
                    "Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.",
                    "Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.",
                    "Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials."
                ],
                correct: [0],
                explanation: "CloudWatch allows sharing of specific dashboards with people outside your AWS account, including those who don't have one. You can share via a public link or by specifying email addresses. This is the most direct method that follows the principle of least privilege, as it only grants access to the specific dashboard without creating an IAM user.",
                focus: "CloudWatch Dashboard Sharing",
                focusExplanation: "The key requirement is providing access to someone without an AWS account while adhering to least privilege. CloudWatch's built-in dashboard sharing feature is designed for this exact scenario. It avoids the overhead and broader permissions of creating an IAM user (Option B/C) and the complexity of a bastion host (Option D)."
            },
            {
                id: 136,
                text: "A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory. Which solution will meet these requirements?",
                options: [
                    "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust to connect the company's self-managed Microsoft Active Directory.",
                    "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
                    "Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.",
                    "Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console."
                ],
                correct: [1],
                explanation: "To integrate an on-premises Active Directory with AWS IAM Identity Center (formerly AWS SSO), you use AWS Directory Service to create a connector. A two-way trust is required so that IAM Identity Center has permissions to read user and group information from your on-premises domain, which is necessary for assigning permissions and for applications to use that metadata.",
                focus: "SSO with On-Premises AD",
                focusExplanation: "IAM Identity Center (successor to AWS SSO) requires a two-way trust to synchronize user and group metadata from the on-premises Active Directory. This metadata is used for assigning permissions and for applications to function correctly. A one-way trust is insufficient for this integration."
            },
            {
                id: 137,
                text: "A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions. The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions. Which solution will meet these requirements?",
                options: [
                    "Deploy a Network Load Balancer (NLB) and an associated target group. Use the NLB as an AWS Global Accelerator endpoint in each Region.",
                    "Deploy an Application Load Balancer (ALB) and an associated target group. Use the ALB as an AWS Global Accelerator endpoint in each Region.",
                    "Deploy a Network Load Balancer (NLB) and an associated target group. Create an Amazon Route 53 latency record that points to aliases for each NLB.",
                    "Deploy an Application Load Balancer (ALB) and an associated target group. Create an Amazon Route 53 weighted record that points to aliases for each ALB."
                ],
                correct: [0],
                explanation: "The application uses UDP, which means an Application Load Balancer (Layer 7) is not suitable; a Network Load Balancer (Layer 4) is required. For global, low-latency routing and automatic failover for non-HTTP traffic like VoIP, AWS Global Accelerator is the ideal service. It uses the AWS global network to find the optimal path to the nearest healthy regional endpoint (the NLB).",
                focus: "Global Accelerator for non-HTTP",
                focusExplanation: "This problem requires a solution for global traffic management for a non-HTTP (UDP) application. Global Accelerator is the perfect fit, providing low latency and fast failover. An NLB is needed at the regional level to handle the UDP traffic, acting as the endpoint for Global Accelerator."
            },
            {
                id: 138,
                text: "A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance. Which solution meets these requirements MOST cost-effectively?",
                options: [
                    "Stop the DB instance when tests are completed. Restart the DB instance when required.",
                    "Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.",
                    "Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.",
                    "Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required."
                ],
                correct: [2],
                explanation: "Stopping an RDS instance only stops billing for compute hours; you still pay for storage. Since the database is only needed for 2 days a month, the most cost-effective solution is to take a snapshot, terminate the instance to stop all charges (except snapshot storage, which is cheap), and then restore the instance from the snapshot when it's needed again.",
                focus: "RDS Cost Optimization",
                focusExplanation: "For workloads that are needed very infrequently (once a month), the 'snapshot, terminate, and restore' pattern is the most cost-effective. While stopping an instance saves on compute, you still incur storage costs. Terminating the instance eliminates all costs except for the snapshot storage, which is significantly cheaper."
            },
            {
                id: 139,
                text: "A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?",
                options: [
                    "Use AWS Config rules to define and detect resources that are not properly tagged.",
                    "Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.",
                    "Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.",
                    "Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code."
                ],
                correct: [0],
                explanation: "AWS Config is designed for assessing, auditing, and evaluating resource configurations. It has a managed rule called 'required-tags' that can automatically check if specified resources (like EC2, RDS, Redshift) have the required tags. This provides a low-effort, automated way to enforce tagging policies for governance.",
                focus: "Tagging Compliance with AWS Config",
                focusExplanation: "The key here is minimizing effort and operating a check. AWS Config provides a managed, automated way to do this with its 'required-tags' rule. All other options involve manual work or building and maintaining custom scripts, which is higher operational overhead."
            },
            {
                id: 140,
                text: "A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?",
                options: [
                    "Containerize the website and host it in AWS Fargate.",
                    "Create an Amazon S3 bucket and host the website there.",
                    "Deploy a web server on an Amazon EC2 instance to host the website.",
                    "Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework."
                ],
                correct: [1],
                explanation: "The website consists entirely of static assets (HTML, CSS, client-side JS, images). Amazon S3 is the most cost-effective and simple way to host a static website. It provides high durability and scalability without the need to manage any servers.",
                focus: "Static Website Hosting",
                focusExplanation: "For hosting static content (files that don't change), Amazon S3 is the cheapest and simplest solution. It removes the need for web servers (EC2, Fargate) and complex backends (Lambda), offering a highly durable, scalable, and low-cost pay-as-you-go model."
            },
            {
                id: 141,
                text: "A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend?",
                options: [
                    "Store the transactions data into Amazon DynamoDB. Use DynamoDB Streams to share the transactions data.",
                    "Stream the transactions data into Amazon Kinesis Data Firehose. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data.",
                    "Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data and then store it in Amazon DynamoDB. Other applications can consume from the stream.",
                    "Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file."
                ],
                correct: [2],
                explanation: "Amazon Kinesis Data Streams is designed for ingesting large volumes of real-time streaming data. Its key feature is allowing multiple consumer applications to process the same stream concurrently. This allows one consumer (a Lambda function) to process and store the data in DynamoDB, while other internal applications can also consume the same raw stream for their own purposes.",
                focus: "Real-Time Streaming and Processing",
                focusExplanation: "The requirement for 'near-real-time' sharing with 'several other internal applications' points directly to Kinesis Data Streams. It allows multiple, independent consumers to process the data from the stream in parallel. This architecture decouples the data ingestion, processing, and consumption, making it highly scalable and flexible."
            },
            {
                id: 142,
                text: "A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources. What should a solutions architect do to meet these requirements?",
                options: [
                    "Use AWS CloudTrail for configuration changes and AWS Config for API calls.",
                    "Use AWS Config for configuration changes and AWS CloudTrail for API calls.",
                    "Use AWS Config for configuration changes and Amazon CloudWatch for API calls.",
                    "Use AWS CloudTrail for configuration changes and Amazon CloudWatch for API calls."
                ],
                correct: [1],
                explanation: "AWS Config and AWS CloudTrail are both crucial for auditing but serve different purposes. AWS Config answers 'What did my AWS resource look like?' by tracking configuration changes. AWS CloudTrail answers 'Who did what?' by recording all API activity in your account. Using them together provides a complete audit trail.",
                focus: "Auditing: Config vs. CloudTrail",
                focusExplanation: "This is a fundamental distinction between two core AWS governance services. AWS Config tracks the state and configuration of resources over time (the 'what'). AWS CloudTrail records all API calls, providing an audit log of actions taken in the account (the 'who' and 'did what')."
            },
            {
                id: 143,
                text: "A company is preparing to launch a public-facing web application on AWS. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks. Which solution meets these requirements?",
                options: [
                    "Enable Amazon GuardDuty on the account.",
                    "Enable Amazon Inspector on the EC2 instances.",
                    "Enable AWS Shield and assign Amazon Route 53 to it.",
                    "Enable AWS Shield Advanced and assign the ELB to it."
                ],
                correct: [3],
                explanation: "AWS Shield Standard provides default protection, but for 'large-scale DDoS attacks', AWS Shield Advanced is required. It provides enhanced protection for resources like Elastic Load Balancers (ELB), near real-time visibility into attacks, and access to the AWS DDoS Response Team (DRT). Since the ELB is the entry point for the application, it's the correct resource to protect.",
                focus: "DDoS Protection",
                focusExplanation: "For 'large-scale' DDoS attacks, AWS Shield Advanced is the appropriate service. It offers more comprehensive protection than the standard version. The protection should be applied to the edge of the application, which in this case is the Elastic Load Balancer (ELB)."
            },
            {
                id: 144,
                text: "A company is building an application in the AWS Cloud that will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions. Which solution meets these requirements with the LEAST operational overhead?",
                options: [
                    "Create an S3 bucket in each Region. Configure SSE-S3 and replication.",
                    "Create a customer managed multi-Region KMS key. Use this key for client-side encryption.",
                    "Create a customer managed KMS key in each Region. Configure SSE-S3 and replication.",
                    "Create a customer managed KMS key in each Region. Configure SSE-KMS and replication."
                ],
                correct: [1],
                explanation: "The key requirement is to use the *same* KMS key across two Regions. This is the explicit use case for multi-Region keys in AWS KMS. They share the same key ID and key material, allowing data encrypted in one region to be decrypted in another without cross-Region calls. Using a multi-Region key is the only way to meet this requirement.",
                focus: "Multi-Region KMS Keys",
                focusExplanation: "The critical requirement is using the 'same KMS key' in two different regions. This is precisely what multi-Region keys are for. They are designed to simplify the management of encryption keys for data that is replicated across regions. Other options involve different keys in each region, which would not work."
            },
            {
                id: 145,
                text: "A company recently launched new workloads on Amazon EC2 instances. The company needs a repeatable strategy to access and administer the instances remotely and securely with the LEAST operational overhead, following the AWS Well-Architected Framework. Which solution meets these requirements?",
                options: [
                    "Use the EC2 serial console for direct terminal access.",
                    "Attach an IAM role to instances and use AWS Systems Manager Session Manager for remote sessions.",
                    "Create an SSH key pair, load the public key to instances, and deploy a bastion host.",
                    "Establish a Site-to-Site VPN and use local machines to connect via SSH keys."
                ],
                correct: [1],
                explanation: "AWS Systems Manager Session Manager is the most secure and operationally efficient method for interactive instance access. It eliminates the need for open inbound ports, bastion hosts, and SSH key management. Access is controlled through IAM roles and all sessions can be logged and audited, aligning perfectly with the Well-Architected Framework.",
                focus: "Secure EC2 Access",
                focusExplanation: "Session Manager provides secure, auditable instance access without opening inbound ports or managing SSH keys. It uses IAM for access control, making it highly secure and easy to manage at scale. This represents the 'least operational overhead' compared to managing bastion hosts or VPNs."
            },
            {
                id: 146,
                text: "A company is hosting a static website on Amazon S3 and using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users. Which solution meets these requirements MOST cost-effectively?",
                options: [
                    "Replicate the S3 bucket to all AWS Regions and use Route 53 geolocation routing.",
                    "Provision accelerators in AWS Global Accelerator and point Route 53 to them.",
                    "Add an Amazon CloudFront distribution in front of the S3 bucket and point Route 53 to it.",
                    "Enable S3 Transfer Acceleration on the bucket and point Route 53 to the new endpoint."
                ],
                correct: [2],
                explanation: "Amazon CloudFront is AWS's content delivery network (CDN). It is designed to solve this exact problem: reducing latency for a global user base by caching static content (like a website in S3) at edge locations around the world. This is the most standard and cost-effective solution.",
                focus: "CDN for Static Content",
                focusExplanation: "The standard, most cost-effective solution for reducing latency for a global audience accessing a static S3 website is to use Amazon CloudFront. As a CDN, it caches the content at edge locations worldwide, serving it to users from the location nearest to them."
            },
            {
                id: 147,
                text: "A company maintains a searchable repository on its website, with data in an Amazon RDS for MySQL database with 2 TB of General Purpose SSD storage. There are millions of updates daily, and some insert operations take 10 seconds or longer. The company has determined that database storage performance is the problem. Which solution addresses this?",
                options: [
                    "Change the storage type to Provisioned IOPS SSD.",
                    "Change the DB instance to a memory optimized instance class.",
                    "Change the DB instance to a burstable performance instance class.",
                    "Enable Multi-AZ RDS read replicas."
                ],
                correct: [0],
                explanation: "The problem is explicitly identified as 'database storage performance'. General Purpose SSD (gp2/gp3) provides a baseline level of IOPS with the ability to burst. For a consistently high-transaction workload with performance issues, switching to Provisioned IOPS (io1/io2) is the correct solution. It allows you to specify a consistent, high level of I/O performance.",
                focus: "RDS Storage Performance",
                focusExplanation: "The question explicitly states the bottleneck is 'database storage performance'. When General Purpose SSD storage is insufficient for a consistent, high I/O workload, the next step is to use Provisioned IOPS SSD storage, which guarantees a specified level of IOPS performance."
            },
            {
                id: 148,
                text: "A company has thousands of edge devices that collectively generate 1 TB of status alerts each day (each ~2 KB). A solutions architect needs to ingest and store these alerts for future analysis. The solution must be highly available, minimize costs, and avoid infrastructure management. Data should be available for immediate analysis for 14 days and then archived. What is the MOST operationally efficient solution?",
                options: [
                    "Use Kinesis Data Firehose to deliver alerts to an S3 bucket. Use an S3 Lifecycle configuration to transition data to S3 Glacier after 14 days.",
                    "Use EC2 instances behind an ELB to ingest alerts and store them in S3. Use an S3 Lifecycle configuration for archiving.",
                    "Use Kinesis Data Firehose to deliver alerts to an OpenSearch cluster. Manage snapshots and data deletion manually.",
                    "Use an SQS queue to ingest alerts. Have consumers poll the queue and copy messages to S3 after 14 days."
                ],
                correct: [0],
                explanation: "This solution is the most operationally efficient because it uses fully managed services. Kinesis Data Firehose is designed for easy data ingestion directly to destinations like S3. Amazon S3 Lifecycle policies provide a simple, automated way to manage data storage tiers, moving data to cheaper, long-term archival storage like S3 Glacier after a specified period.",
                focus: "Data Ingestion and Archiving",
                focusExplanation: "This solution is the most 'operationally efficient' as it relies on fully managed services. Kinesis Firehose handles the data ingestion without servers, and S3 Lifecycle policies automate the archiving process. The other options require managing EC2 instances, clusters, or custom consumer logic, which adds significant operational overhead."
            },
            {
                id: 149,
                text: "A company's application integrates with multiple SaaS sources. It uses EC2 instances to receive data, upload it to an S3 bucket, and then send a notification. The application performance is slow. What solution improves performance with the LEAST operational overhead?",
                options: [
                    "Use an Auto Scaling group for the EC2 instances and an S3 event notification to SNS.",
                    "Use an Amazon AppFlow flow to transfer data from SaaS to S3. Use an S3 event notification to SNS.",
                    "Use an EventBridge rule for each SaaS source to send data to S3. Use another rule for notifications.",
                    "Containerize the application on ECS and use Container Insights for notifications."
                ],
                correct: [1],
                explanation: "Amazon AppFlow is a fully managed service designed specifically for securely transferring data between SaaS applications and AWS services like S3. Using AppFlow eliminates the need to run and manage custom EC2 instances, which directly addresses the performance bottleneck and reduces operational overhead significantly. Decoupling the notification with S3 event notifications is also a best practice.",
                focus: "SaaS Integration with AppFlow",
                focusExplanation: "The key phrases are 'SaaS sources' and 'LEAST operational overhead'. Amazon AppFlow is a fully managed service built for this exact purpose: integrating SaaS applications with AWS services. It replaces the custom EC2-based solution, eliminating server management and improving performance."
            },
            {
                id: 150,
                text: "A company runs an image-processing application on EC2 instances in a single VPC across multiple AZs. The instances download and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges. What is the MOST cost-effective way to avoid Regional data transfer charges?",
                options: [
                    "Launch a NAT gateway in each Availability Zone.",
                    "Replace the NAT gateway with a NAT instance.",
                    "Deploy a gateway VPC endpoint for Amazon S3.",
                    "Provision an EC2 Dedicated Host to run the EC2 instances."
                ],
                correct: [2],
                explanation: "Traffic from a VPC to S3 that goes through a NAT Gateway incurs data processing and transfer charges. A gateway VPC endpoint provides a private, direct route from your VPC to Amazon S3 over the AWS network. This avoids the NAT gateway entirely for S3 traffic, which eliminates the associated data transfer costs and is the most cost-effective solution.",
                focus: "VPC Endpoint for S3",
                focusExplanation: "The goal is to eliminate data transfer charges for traffic between EC2 and S3 within the same region. A Gateway VPC Endpoint for S3 achieves this by keeping the traffic on the AWS private network, bypassing the NAT gateway. This is the standard and most cost-effective solution for this scenario."
            },
            {
                id: 151,
                text: "A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users. Which solution meets these requirements?",
                options: [
                    "Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.",
                    "Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.",
                    "Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.",
                    "Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account."
                ],
                correct: [1],
                focus: "AWS Direct Connect for Bandwidth Issues",
                focusExplanation: "AWS Direct Connect provides a dedicated network connection from on-premises to AWS, bypassing the public internet. This is ideal for transferring large amounts of data without impacting regular internet bandwidth, addressing the user complaints about limitations. VPN still uses the internet, Snowball is not a cost-effective long-term solution for daily backups, and S3 service limits are not the root cause of the bandwidth problem."
            },
            {
                id: 152,
                text: "A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
                options: [
                    "Enable versioning on the S3 bucket.",
                    "Enable MFA Delete on the S3 bucket.",
                    "Create a bucket policy on the S3 bucket.",
                    "Enable default encryption on the S3 bucket.",
                    "Create a lifecycle policy for the objects in the S3 bucket."
                ],
                correct: [0, 1],
                multiSelect: true,
                focus: "S3 Data Protection",
                focusExplanation: "To protect against accidental deletion, enabling Versioning is the first step, as it keeps all versions of an object. For an even higher level of protection, MFA Delete requires a Multi-Factor Authentication code to delete any object version, making accidental deletions much harder. Bucket policies control access, but don't inherently prevent deletion by authorized users."
            },
            {
                id: 153,
                text: "A company has a data ingestion workflow that consists of the following: An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries. An AWS Lambda function to process the data and record metadata. The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job. Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)",
                options: [
                    "Deploy the Lambda function in multiple Availability Zones.",
                    "Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.",
                    "Increase the CPU and memory that are allocated to the Lambda function.",
                    "Increase provisioned throughput for the Lambda function.",
                    "Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue."
                ],
                correct: [1, 4],
                multiSelect: true,
                focus: "Decoupling with SQS for Reliability",
                focusExplanation: "When a consumer (Lambda) might fail, you need a durable, persistent queue to hold messages. By subscribing an SQS queue to the SNS topic, messages are safely stored. The Lambda function can then pull messages from SQS. If the Lambda fails, the message remains in the queue and can be retried automatically, ensuring no data is lost."
            },
            {
                id: 154,
                text: "A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size. Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation. What should a solutions architect do to meet these requirements with the LEAST development effort?",
                options: [
                    "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.",
                    "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.",
                    "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.",
                    "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII."
                ],
                correct: [1],
                focus: "PII Detection with Amazon Macie",
                focusExplanation: "Amazon Macie is a fully managed data security service that uses machine learning to automatically discover, classify, and protect sensitive data like PII in Amazon S3. For a requirement to detect PII with the least development effort, Macie is the purpose-built service."
            },
            {
                id: 155,
                text: "A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week. What should the company do to guarantee the EC2 capacity?",
                options: [
                    "Purchase Reserved Instances that specify the Region needed.",
                    "Create an On-Demand Capacity Reservation that specifies the Region needed.",
                    "Purchase Reserved Instances that specify the Region and three Availability Zones needed.",
                    "Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed."
                ],
                correct: [3],
                focus: "On-Demand Capacity Reservations",
                focusExplanation: "On-Demand Capacity Reservations are used to reserve EC2 capacity in a specific Availability Zone for any duration. This guarantees you can launch instances when you need them. Reserved Instances provide a discount in exchange for a 1 or 3-year commitment and do not guarantee capacity in the same way as a Capacity Reservation."
            },
            {
                id: 156,
                text: "A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location. What should a solutions architect do to meet these requirements?",
                options: [
                    "Move the catalog to Amazon ElastiCache for Redis.",
                    "Deploy a larger EC2 instance with a larger instance store.",
                    "Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.",
                    "Move the catalog to an Amazon Elastic File System (Amazon EFS) file system."
                ],
                correct: [3],
                focus: "Durable & Available Storage (EFS)",
                focusExplanation: "Instance stores are ephemeral and not durable. Amazon EFS provides a highly available and durable file system that can be mounted by EC2 instances. It's designed for persistence and availability, making it a suitable replacement for an instance store when data must be preserved. ElastiCache is for caching (not durable primary storage), and Glacier is for long-term archiving (not highly available)."
            },
            {
                id: 157,
                text: "A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable. Which solution will meet these requirements MOST cost-effectively?",
                options: [
                    "Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.",
                    "Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year.",
                    "Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.",
                    "Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive."
                ],
                correct: [1],
                focus: "S3 Intelligent-Tiering",
                focusExplanation: "S3 Intelligent-Tiering is ideal for data with changing or unknown access patterns. It automatically moves data to the most cost-effective access tier without performance impact or operational overhead. For the predictable pattern after 1 year, a lifecycle policy to move data to a colder tier like S3 Glacier Flexible Retrieval further optimizes costs."
            },
            {
                id: 158,
                text: "A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?",
                options: [
                    "Create an AWS Lambda function to apply the patch to all EC2 instances.",
                    "Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.",
                    "Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.",
                    "Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances."
                ],
                correct: [3],
                focus: "AWS Systems Manager Run Command",
                focusExplanation: "AWS Systems Manager Run Command allows you to remotely and securely manage the configuration of your instances. For a one-time, immediate action like applying a specific third-party patch across a fleet of instances, Run Command is the most direct and fastest tool. Patch Manager is more focused on recurring OS and supported application patching."
            },
            {
                id: 159,
                text: "A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
                options: [
                    "Configure the application to send the data to Amazon Kinesis Data Firehose.",
                    "Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.",
                    "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.",
                    "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.",
                    "Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email."
                ],
                correct: [1, 3],
                multiSelect: true,
                focus: "Scheduled Tasks & Emailing (EventBridge, Lambda, SES)",
                focusExplanation: "This solution uses a serverless, event-driven architecture. Amazon EventBridge provides the scheduler ('every morning'). AWS Lambda provides the compute to query the API and format the report. Amazon SES is the dedicated service for sending formatted emails, like HTML reports. This combination is highly efficient and requires no server management."
            },
            {
                id: 160,
                text: "A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically. is highly available, and requires minimum operational overhead. Which solution will meet these requirements?",
                options: [
                    "Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.",
                    "Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.",
                    "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage.",
                    "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage."
                ],
                correct: [2],
                focus: "Shared File Storage (Amazon EFS)",
                focusExplanation: "The key requirements are 'standard file system structure', 'scales automatically', and 'highly available'. Amazon EFS is a managed file storage service that meets all these criteria. It provides a standard file system interface, scales automatically as you add and remove files, and is regionally available across multiple AZs. EBS is tied to a single AZ, and S3 is object storage, not a file system."
            },
            {
                id: 161,
                text: "A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency. Which solution will meet these requirements?",
                options: [
                    "Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.",
                    "Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.",
                    "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years.",
                    "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years."
                ],
                correct: [2],
                focus: "S3 Object Lock Compliance Mode",
                focusExplanation: "The requirement that 'no one... including administrative users and root users' can delete the records points directly to S3 Object Lock in Compliance Mode. This mode enforces a Write-Once-Read-Many (WORM) model where the retention period cannot be changed or overridden by any user. A lifecycle policy handles the cost-effective transition to an archive tier like Glacier Deep Archive after the first year."
            },
            {
                id: 162,
                text: "A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files. What should a solutions architect do to meet these requirements?",
                options: [
                    "Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.",
                    "Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.",
                    "Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server.",
                    "Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS."
                ],
                correct: [2],
                focus: "Managed Windows File Server (FSx)",
                focusExplanation: "Amazon FSx for Windows File Server is the purpose-built service for migrating Windows-based file servers to AWS. It provides a fully managed, native Windows file system that supports the SMB protocol and Active Directory integration. This allows users to access files in the same way they did on-premises, meeting the requirement with minimal disruption."
            },
            {
                id: 163,
                text: "A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases. Which solution will meet these requirements?",
                options: [
                    "Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.",
                    "Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.",
                    "Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances.",
                    "Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets."
                ],
                correct: [2],
                focus: "Security Group Referencing",
                focusExplanation: "Security groups are stateful firewalls that can control traffic at the instance level. A powerful feature is the ability to reference another security group as a source in an inbound rule. This is the standard and most effective way to allow traffic from one layer of your application (the private EC2 instances) to another (the database instances) without hardcoding IP ranges."
            },
            {
                id: 164,
                text: "A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS. Which solution will meet these requirements?",
                options: [
                    "Create stage variables in API Gateway with Name=\"Endpoint-URL\" and Value=\"Company Domain Name\" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM).",
                    "Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.",
                    "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.",
                    "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name."
                ],
                correct: [2],
                focus: "API Gateway Custom Domains",
                focusExplanation: "To use a custom domain with a Regional API Gateway endpoint, the SSL/TLS certificate must be in AWS Certificate Manager (ACM) in the SAME region as the API Gateway. You then create a custom domain name in API Gateway, associate the certificate, and create a Route 53 alias record to point your domain to the API Gateway's regional endpoint."
            },
            {
                id: 165,
                text: "A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort. What should a solutions architect do to meet these requirements?",
                options: [
                    "Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.",
                    "Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.",
                    "Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.",
                    "Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions."
                ],
                correct: [1],
                focus: "Image Moderation (Amazon Rekognition)",
                focusExplanation: "Amazon Rekognition is a managed service that provides image and video analysis. It has a specific feature for content moderation that can detect inappropriate or unsafe content with a simple API call. This is the solution with the least development effort, as it uses a pre-trained model and doesn't require building or managing any ML infrastructure."
            },
            {
                id: 166,
                text: "A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload. What should a solutions architect do to meet these requirements?",
                options: [
                    "Use Amazon EC2 instances, and install Docker on the instances.",
                    "Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.",
                    "Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.",
                    "Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS) -optimized Amazon Machine Image (AMI)."
                ],
                correct: [2],
                focus: "Serverless Containers (AWS Fargate)",
                focusExplanation: "The key requirement is to avoid managing the underlying infrastructure for containers. AWS Fargate is the serverless compute engine for containers (with both ECS and EKS) that allows you to run containers without managing servers or clusters. You just define your application and Fargate handles the provisioning, patching, and scaling of the underlying infrastructure."
            },
            {
                id: 167,
                text: "A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day. What should a solutions architect do to transmit and process the clickstream data?",
                options: [
                    "Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.",
                    "Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.",
                    "Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket. run an AWS Lambda function to process the data for analysis.",
                    "Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis."
                ],
                correct: [3],
                focus: "Streaming Data Pipeline (Kinesis)",
                focusExplanation: "For high-volume, real-time data like clickstreams, Amazon Kinesis is the ideal solution. Kinesis Data Streams can ingest the data at scale. Kinesis Data Firehose can then reliably deliver that data to a destination like an S3 data lake. From S3, the data can be loaded into a data warehouse like Amazon Redshift for analysis. This creates a scalable, managed pipeline for streaming data."
            },
            {
                id: 168,
                text: "A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS. What should a solutions architect do to meet this requirement?",
                options: [
                    "Update the ALB's network ACL to accept only HTTPS traffic.",
                    "Create a rule that replaces the HTTP in the URL with HTTPS.",
                    "Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.",
                    "Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI)."
                ],
                correct: [2],
                focus: "ALB HTTP to HTTPS Redirect",
                focusExplanation: "Application Load Balancers (ALBs) have a built-in feature to handle this common requirement. You can configure a rule on the HTTP listener (port 80) to perform a redirect action, sending all incoming HTTP requests to the HTTPS listener (port 443). This is the simplest and most efficient way to enforce HTTPS."
            },
            {
                id: 169,
                text: "A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.",
                    "Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.",
                    "Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.",
                    "Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters."
                ],
                correct: [2],
                focus: "Credential Rotation (AWS Secrets Manager)",
                focusExplanation: "AWS Secrets Manager is the purpose-built service for securely storing and managing the lifecycle of credentials. Its key feature is the ability to automatically rotate secrets (like database passwords) on a schedule. This integrates directly with services like RDS, providing a fully managed solution with minimal operational overhead."
            },
            {
                id: 170,
                text: "A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires. What should a solutions architect do to meet these requirements?",
                options: [
                    "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
                    "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALUse the managed renewal feature to automatically rotate the certificate.",
                    "Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
                    "Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually."
                ],
                correct: [3],
                focus: "Importing Third-Party Certificates (ACM)",
                focusExplanation: "AWS Certificate Manager (ACM) can manage certificates issued by AWS, which it can renew automatically. However, when you use a certificate from an external, third-party CA, you must import it into ACM. ACM cannot automatically renew imported certificates. The best practice is to use CloudWatch Events to get notified of impending expiration so you can manually renew and re-import it."
            },
            {
                id: 171,
                text: "A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time. Which solution meets these requirements MOST cost-effectively?",
                options: [
                    "Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3.",
                    "Save the .pdf files to Amazon DynamoDB. Use the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB.",
                    "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.",
                    "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store."
                ],
                correct: [0],
                focus: "Serverless File Processing (S3 + Lambda)",
                focusExplanation: "This is a classic serverless pattern. S3 provides scalable, durable, and cost-effective object storage. Using an S3 event notification to trigger a Lambda function for processing is highly scalable and cost-effective, as you only pay for the compute time used for the conversion. DynamoDB is not suitable for large file storage, and EC2-based solutions add operational overhead."
            },
            {
                id: 172,
                text: "A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day. The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS. What should a solutions architect do to meet these requirements?",
                options: [
                    "Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.",
                    "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.",
                    "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway. depending on each workload's location.",
                    "Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway."
                ],
                correct: [3],
                focus: "Hybrid File Access (FSx File Gateway)",
                focusExplanation: "This solution provides the best of both worlds for a hybrid environment. Amazon FSx for Windows File Server provides the managed file system in the cloud. The Amazon FSx File Gateway, deployed on-premises, provides a local cache of frequently accessed files, ensuring low-latency access for on-premises users while seamlessly integrating with the primary file system in AWS."
            },
            {
                id: 173,
                text: "A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.",
                    "Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.",
                    "Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.",
                    "Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text."
                ],
                correct: [2],
                focus: "Medical Document Analysis (Textract + Comprehend Medical)",
                focusExplanation: "This solution uses two powerful, purpose-built AI services. Amazon Textract is designed to accurately extract text from documents like PDFs and images. Amazon Comprehend Medical is a HIPAA-eligible NLP service specifically trained to identify Protected Health Information (PHI) and other medical entities from text. This combination requires the least operational overhead as it uses managed services."
            },            {
                id: 174,
                text: "A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days. Which storage solution is MOST cost-effective?",
                options: [
                    "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.",
                    "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.",
                    "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.",
                    "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation."
                ],
                correct: [2],
                explanation: "The key requirements are cost-effectiveness, immediate accessibility, and durability for critical data. S3 Standard-IA is the best fit for data that is accessed infrequently but requires immediate access. S3 Glacier does not provide immediate access (unless using Instant Retrieval, which can be more expensive if accessed more than quarterly). S3 One Zone-IA is not suitable for critical, hard-to-reproduce data because it stores data in a single Availability Zone.",
                focus: "S3 Storage Classes & Lifecycle",
                focusExplanation: "Matching data access patterns to the right S3 storage class is the most effective way to optimize storage costs. This requires understanding the trade-offs between retrieval time, retrieval cost, and storage cost for each tier (Standard, Standard-IA, Glacier, etc.)."
            },
            {
                id: 175,
                text: "A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages. What should a solutions architect do to ensure messages are being processed once only?",
                options: [
                    "Use the CreateQueue API call to create a new queue.",
                    "Use the AddPermission API call to add appropriate permissions.",
                    "Use the ReceiveMessage API call to set an appropriate wait time.",
                    "Use the ChangeMessageVisibility API call to increase the visibility timeout."
                ],
                correct: [3],
                explanation: "Duplicate processing happens when a message reappears in the queue before it's deleted. Increasing the visibility timeout gives the consumer enough time to process and delete the message, preventing another consumer from picking it up.",
                focus: "SQS Visibility Timeout",
                focusExplanation: "The visibility timeout is a core concept in SQS for preventing duplicate message processing in distributed systems. It's a timeout that hides a message from other consumers while one consumer is processing it. Understanding how to set it correctly is crucial for building reliable SQS-based applications."
            },
            {
                id: 176,
                text: "A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails. What should the solutions architect do to meet these requirements?",
                options: [
                    "Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.",
                    "Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.",
                    "Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.",
                    "Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails."
                ],
                correct: [0],
                explanation: "This solution meets all requirements. Direct Connect provides the highly available, low-latency primary connection. A VPN provides a cost-effective backup solution. The company explicitly accepts slower traffic on failure, making the cheaper VPN backup ideal.",
                focus: "Hybrid Connectivity (Direct Connect + VPN)",
                focusExplanation: "Combining a high-performance Direct Connect connection with a lower-cost VPN backup is a standard and cost-effective design pattern for creating a highly available hybrid network connection. It balances performance, reliability, and cost."
            },
            {
                id: 177,
                text: "A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data. Which solution will meet these requirements with the LEAST operational effort?",
                options: [
                    "Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.",
                    "Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.",
                    "Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.",
                    "Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database."
                ],
                correct: [1],
                explanation: "For high availability within a region, extending the ASG and the database across multiple AZs is the standard pattern. Making the Aurora database Multi-AZ provides a managed, automatic failover. RDS Proxy enhances this by maintaining a warm pool of connections, which speeds up failover time and makes the application more resilient to database failures.",
                focus: "High Availability (Multi-AZ & RDS Proxy)",
                focusExplanation: "Building highly available applications involves eliminating single points of failure. For a database, this means using a Multi-AZ deployment. For the application tier, it's using an Auto Scaling Group across multiple AZs. RDS Proxy improves this by making failovers faster and more transparent to the application."
            },
            {
                id: 178,
                text: "A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service. The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code. What should a solutions architect do to meet these requirements?",
                options: [
                    "Enable HTTP health checks on the NLB, supplying the URL of the company's application.",
                    "Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected. the application will restart.",
                    "Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.",
                    "Create an Amazon Cloud Watch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state."
                ],
                correct: [2],
                explanation: "The core issue is that a Network Load Balancer operates at Layer 4 (TCP) and cannot perform Layer 7 (HTTP) health checks. An Application Load Balancer (ALB) is required for this. By replacing the NLB with an ALB and configuring HTTP health checks, the ALB can detect application-level failures and signal the Auto Scaling group to replace the unhealthy instances automatically.",
                focus: "ALB vs. NLB (Health Checks)",
                focusExplanation: "Choosing the right load balancer is crucial. NLBs are for high-performance TCP traffic, but they lack application-layer awareness. ALBs are designed for HTTP/HTTPS traffic and can perform detailed health checks based on HTTP response codes or specific paths, which is necessary for detecting application failures."
            },
            {
                id: 179,
                text: "A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour. What should the solutions architect recommend to meet these requirements?",
                options: [
                    "Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.",
                    "Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.",
                    "Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB.",
                    "Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot."
                ],
                correct: [1],
                explanation: "DynamoDB Point-in-Time Recovery (PITR) is designed for exactly this use case. It provides continuous backups of your table data, allowing you to restore to any single second in the preceding 35 days. This easily meets the 15-minute RPO, and the restore process is fast enough to meet the 1-hour RTO.",
                focus: "DynamoDB Point-in-Time Recovery (PITR)",
                focusExplanation: "PITR is the primary backup and recovery mechanism for DynamoDB. It protects against accidental writes or deletes by allowing precise, fine-grained recovery. Knowing when to use PITR versus on-demand backups is key to designing resilient DynamoDB-based applications."
            },
            {
                id: 180,
                text: "A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs. How can the solutions architect meet this requirement?",
                options: [
                    "Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.",
                    "Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets.",
                    "Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets.",
                    "Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets."
                ],
                correct: [3],
                explanation: "By default, traffic from a VPC to an S3 bucket goes over the public internet, incurring data transfer costs. An S3 Gateway VPC Endpoint provides a private route from your VPC directly to the S3 service, keeping all traffic within the AWS network. Data transfer between a VPC and S3 in the same region over a gateway endpoint is free.",
                focus: "VPC Gateway Endpoints for Cost Savings",
                focusExplanation: "VPC endpoints are crucial for both security and cost optimization. By keeping traffic off the public internet, you not only improve your security posture but also eliminate data transfer costs for traffic between your VPC and supported services (like S3 and DynamoDB) within the same region."
            },
            {
                id: 181,
                text: "A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)",
                options: [
                    "Replace the current security group of the bastion host with one that only allows inbound access from the application instances.",
                    "Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.",
                    "Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.",
                    "Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host.",
                    "Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host."
                ],
                correct: [2, 3],
                multiSelect: true,
                explanation: "The connection flow is On-Premises -> Internet -> Bastion -> App Instance. The security group for the bastion host should allow inbound SSH traffic from the company's public/external IP address range. The security group for the application instances should only allow inbound SSH traffic from the private IP address of the bastion host, as they communicate within the same VPC.",
                focus: "Bastion Host Security Group Configuration",
                focusExplanation: "This question tests the fundamental security configuration for a bastion host pattern. The bastion itself must be accessible from the administrator's public IP, while the private instances it manages should only accept connections from the bastion's private IP. This two-hop access pattern is a standard security best practice."
            },
            {
                id: 182,
                text: "A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company. How should security groups be configured in this situation? (Choose two.)",
                options: [
                    "Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.",
                    "Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.",
                    "Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier.",
                    "Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.",
                    "Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier."
                ],
                correct: [0, 2],
                multiSelect: true,
                explanation: "The web tier needs to be accessible to the public on the HTTPS port (443), so its security group must allow inbound traffic from anywhere (0.0.0.0/0) on that port. The database tier should only be accessible from the web tier. The best practice is to configure the database security group to allow inbound traffic on the MS SQL port (1433) only from the security group ID of the web tier.",
                focus: "Security Group Tiered Architecture",
                focusExplanation: "This is a classic example of using security groups to enforce network segmentation in a multi-tier application. A key feature of security groups is the ability to reference another security group as a source or destination, which is the most secure and scalable way to manage inter-tier communication."
            },
            {
                id: 183,
                text: "A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application. Which solution meets these requirements and is the MOST operationally efficient?",
                options: [
                    "Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services.",
                    "Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements.",
                    "Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.",
                    "Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected."
                ],
                correct: [0],
                explanation: "This is the most modern and operationally efficient solution. API Gateway provides a managed endpoint for the RESTful services. Lambda offers serverless compute that scales automatically. SQS decouples the application tiers, preventing dropped transactions by queuing requests when a tier is overloaded. This architecture addresses all requirements with minimal management.",
                focus: "Application Modernization & Decoupling",
                focusExplanation: "Modernizing applications often involves moving from monolithic, tightly coupled architectures to decoupled, serverless ones. The combination of API Gateway (for endpoints), Lambda (for compute), and SQS (for decoupling) is a powerful, scalable, and operationally efficient pattern for this purpose."
            },
            {
                id: 184,
                text: "A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive. Which solution offers the MOST reliable data transfer?",
                options: [
                    "AWS DataSync over public internet",
                    "AWS DataSync over AWS Direct Connect",
                    "AWS Database Migration Service (AWS DMS) over public internet",
                    "AWS Database Migration Service (AWS DMS) over AWS Direct Connect"
                ],
                correct: [1],
                explanation: "For large-scale, daily data transfers that require reliability and security, AWS DataSync over a dedicated AWS Direct Connect connection is the superior solution. DataSync is optimized for large data transfers, and Direct Connect provides a private, stable, and consistent network link, avoiding the unpredictability of the public internet.",
                focus: "Reliable Data Transfer (DataSync + Direct Connect)",
                focusExplanation: "When reliability is paramount for data transfers, you want to avoid the public internet. DataSync is the tool for moving the data, and Direct Connect provides the private, reliable network path. DMS is for database migrations, not file transfers."
            },
            {
                id: 185,
                text: "A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.",
                    "Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.",
                    "Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.",
                    "Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3."
                ],
                correct: [2],
                explanation: "This solution uses a fully serverless, managed pipeline. API Gateway provides the API endpoint. Kinesis Data Streams handles the real-time ingestion. Kinesis Data Firehose takes the stream, batches it, can invoke a Lambda function for transformation, and reliably delivers it to S3. This architecture is highly scalable and has the least operational overhead.",
                focus: "Serverless Ingestion Pipeline",
                focusExplanation: "The combination of API Gateway -> Kinesis Data Streams -> Kinesis Data Firehose -> Lambda -> S3 is a classic and powerful serverless pattern for real-time data ingestion and processing. Each component is a managed service, minimizing operational burden."
            },
            {
                id: 186,
                text: "A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years. What is the MOST operationally efficient solution that meets these requirements?",
                options: [
                    "Use DynamoDB point-in-time recovery to back up the table continuously.",
                    "Use AWS Backup to create backup schedules and retention policies for the table.",
                    "Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.",
                    "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket."
                ],
                correct: [1],
                explanation: "AWS Backup is a centralized, managed service designed for this purpose. It allows you to create automated backup plans with schedules and retention policies for various AWS resources, including DynamoDB. This is far more operationally efficient than creating custom Lambda functions or manual on-demand backups.",
                focus: "Long-Term Backup (AWS Backup)",
                focusExplanation: "For long-term archival and compliance requirements, a managed service like AWS Backup is the most operationally efficient solution. It automates the entire backup lifecycle, including scheduling, retention, and lifecycle to cold storage, across multiple AWS services."
            },
            {
                id: 187,
                text: "A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly. What should a solutions architect recommend?",
                options: [
                    "Create a DynamoDB table in on-demand capacity mode.",
                    "Create a DynamoDB table with a global secondary index.",
                    "Create a DynamoDB table with provisioned capacity and auto scaling.",
                    "Create a DynamoDB table in provisioned capacity mode, and configure it as a global table."
                ],
                correct: [0],
                explanation: "On-demand capacity mode is ideal for unpredictable workloads. You pay per request, so there's no cost when the table is not in use. It automatically scales to handle sudden traffic spikes without throttling. Provisioned capacity with auto-scaling is better for predictable traffic, as auto-scaling can take a few minutes to react to sudden spikes.",
                focus: "DynamoDB Capacity Modes (On-Demand)",
                focusExplanation: "Understanding DynamoDB's capacity modes is crucial for cost and performance optimization. For spiky, unpredictable, or unknown traffic patterns, On-Demand mode is the simplest and often most cost-effective choice, as it eliminates the need to forecast capacity."
            },
            {
                id: 188,
                text: "A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs to share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots. What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?",
                options: [
                    "Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key.",
                    "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key.",
                    "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.",
                    "Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account, Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account."
                ],
                correct: [1],
                explanation: "To securely share an AMI encrypted with a customer-managed KMS key, you must do two things: 1. Modify the AMI's `launchPermission` to grant launch access to the specific destination account. 2. Modify the KMS key policy to allow the destination account to use the key for decryption during the launch process. This ensures the AMI remains private and the encryption key is only used by authorized accounts.",
                focus: "Secure AMI Sharing (KMS & LaunchPermission)",
                focusExplanation: "To securely share an AMI encrypted with a customer-managed KMS key, you must do two things: 1. Modify the AMI's `launchPermission` to grant launch access to the specific destination account. 2. Modify the KMS key policy to allow the destination account to use the key for decryption during the launch process. This ensures the AMI remains private and the encryption key is only used by authorized accounts."
            },
            {
                id: 189,
                text: "A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored. Which design should the solutions architect use?",
                options: [
                    "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.",
                    "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.",
                    "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue.",
                    "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic."
                ],
                correct: [2],
                explanation: "For durable, decoupled job processing that scales with workload, the combination of SQS and an Auto Scaling Group (ASG) is the classic architecture. SQS durably stores the jobs. The ASG scales EC2 instances based on the SQS queue depth (`ApproximateNumberOfMessagesVisible`), ensuring that processing power matches the number of jobs waiting.",
                focus: "Decoupled & Scalable Processing (SQS + ASG)",
                focusExplanation: "For durable, decoupled job processing that scales with workload, the combination of SQS and an Auto Scaling Group (ASG) is the classic architecture. SQS durably stores the jobs. The ASG scales EC2 instances based on the SQS queue depth (`ApproximateNumberOfMessagesVisible`), ensuring that processing power matches the number of jobs waiting."
            },
            {
                id: 190,
                text: "A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate. What should a solutions architect recommend to meet this requirement?",
                options: [
                    "Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.",
                    "Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.",
                    "Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).",
                    "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS)."
                ],
                correct: [3],
                explanation: "Amazon EventBridge can be used to create rules that react to specific AWS events. ACM emits an 'ACM Certificate Approaching Expiration' event. You can create a rule that triggers on this event and invokes a target, such as a Lambda function or an SNS topic, to send a notification.",
                focus: "ACM Certificate Expiration Monitoring (EventBridge)",
                focusExplanation: "Amazon EventBridge can be used to create rules that react to specific AWS events. ACM emits an 'ACM Certificate Approaching Expiration' event. You can create a rule that triggers on this event (which can be customized for a specific timeframe like 30 days) and invokes a target, such as a Lambda function or an SNS topic, to send a notification."
            },
            {
                id: 191,
                text: "A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed. What should the solutions architect recommend?",
                options: [
                    "Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.",
                    "Move the website to Amazon S3. Use Cross-Region Replication between Regions.",
                    "Use Amazon CloudFront with a custom origin pointing to the on-premises servers.",
                    "Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers."
                ],
                correct: [2],
                explanation: "Amazon CloudFront is a global CDN that can dramatically improve website performance for international users. By configuring a 'custom origin' that points to the on-premises servers, CloudFront can cache static and dynamic content at edge locations close to European users, reducing latency without requiring migration of the backend.",
                focus: "Content Delivery Network (CloudFront) for Hybrid Workloads",
                focusExplanation: "Amazon CloudFront is a global CDN that can dramatically improve website performance for international users. By configuring a 'custom origin' that points to the on-premises servers, CloudFront can cache static and dynamic content at edge locations close to European users, reducing latency without requiring migration of the backend."
            },
            {
                id: 192,
                text: "A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours. The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use. Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?",
                options: [
                    "Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.",
                    "Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances.",
                    "Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.",
                    "Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances."
                ],
                correct: [1],
                explanation: "To optimize EC2 costs, match the purchasing model to the workload pattern. For steady-state, 24/7 workloads like production, Reserved Instances offer significant discounts over On-Demand. For workloads with variable hours that can be stopped, like dev/test, On-Demand pricing is most cost-effective as you only pay for the hours used.",
                focus: "EC2 Purchasing Options (Reserved vs. On-Demand)",
                focusExplanation: "To optimize EC2 costs, match the purchasing model to the workload pattern. For steady-state, 24/7 workloads like production, Reserved Instances offer significant discounts over On-Demand. For workloads with variable hours that can be stopped, like dev/test, On-Demand pricing is most cost-effective as you only pay for the hours used."
            },
            {
                id: 193,
                text: "A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. new documents cannot be modified or deleted after they are stored. What should a solutions architect do to meet this requirement?",
                options: [
                    "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled.",
                    "Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.",
                    "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only.",
                    "Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read-only mode."
                ],
                correct: [0],
                explanation: "S3 Object Lock provides a Write-Once-Read-Many (WORM) model for data stored in S3. When enabled, it can prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely, which is ideal for meeting regulatory compliance requirements.",
                focus: "WORM Storage (S3 Object Lock)",
                focusExplanation: "S3 Object Lock is the primary feature for meeting compliance requirements that mandate immutable storage (WORM). It works in conjunction with S3 Versioning to protect object versions from modification or deletion."
            },
            {
                id: 194,
                text: "A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently. Which solution meets these requirements?",
                options: [
                    "Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager.",
                    "Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.",
                    "Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.",
                    "Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database."
                ],
                correct: [0],
                explanation: "AWS Secrets Manager is a purpose-built service for securely storing and managing secrets like database credentials. It integrates with RDS to automate credential rotation, which directly meets the requirement. Applications retrieve credentials via an API call instead of having them hardcoded.",
                focus: "Secure Credential Management (AWS Secrets Manager)",
                focusExplanation: "AWS Secrets Manager is the best practice for managing secrets like database credentials. Its key features are secure storage, fine-grained access control via IAM, and, most importantly, the ability to automatically rotate secrets, which is a critical security requirement."
            },
            {
                id: 195,
                text: "A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event. A solutions architect needs to design a solution that stores customer data that is created during database upgrades. Which solution will meet these requirements?",
                options: [
                    "Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.",
                    "Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.",
                    "Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.",
                    "Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database."
                ],
                correct: [3],
                explanation: "Using an SQS queue decouples the application from the database. If the database is unavailable for an upgrade, the Lambda function can successfully write the customer data to the SQS queue. A separate Lambda function can then process messages from the queue and write them to the database once it becomes available, ensuring no data is lost.",
                focus: "Application Resiliency during DB Maintenance (SQS)",
                focusExplanation: "Decoupling components with a queueing service like SQS is a fundamental pattern for building resilient applications. It allows systems to handle temporary outages or maintenance windows of downstream dependencies (like a database) without losing data."
            },
            {
                id: 196,
                text: "A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible. Which solution will meet these requirements?",
                options: [
                    "Configure the Requester Pays feature on the company's S3 bucket.",
                    "Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets.",
                    "Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.",
                    "Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets."
                ],
                correct: [0],
                explanation: "The 'Requester Pays' feature shifts the cost of data download from the bucket owner to the entity making the request. By enabling this, the survey company ensures that it will not incur any data transfer costs when the European marketing firm accesses the data.",
                focus: "S3 Cost Optimization (Requester Pays)",
                focusExplanation: "The Requester Pays feature is specifically designed for scenarios where a bucket owner wants to share large datasets without incurring the associated access costs. It makes the requester responsible for the data transfer and request charges."
            },
            {
                id: 197,
                text: "A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution. What should a solutions architect do to secure the audit documents?",
                options: [
                    "Enable the versioning and MFA Delete features on the S3 bucket.",
                    "Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.",
                    "Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates.",
                    "Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key."
                ],
                correct: [0],
                explanation: "S3 Versioning keeps a full history of all objects, protecting against both accidental overwrites and deletions (as a delete simply adds a 'delete marker'). Adding MFA Delete provides another layer of security by requiring a multi-factor authentication code to permanently delete an object version.",
                focus: "S3 Data Protection (Versioning and MFA Delete)",
                focusExplanation: "To protect against accidental deletion in S3, the primary mechanism is S3 Versioning. MFA Delete adds a powerful secondary control, making it much harder to permanently delete data accidentally."
            },
            {
                id: 198,
                text: "A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours. The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue. Which solution will meet this requirement with the LEAST operational overhead?",
                options: [
                    "Modify the DB instance to be a Multi-AZ deployment.",
                    "Create a read replica of the database. Configure the script to query only the read replica.",
                    "Instruct the development team to manually export the entries in the database at the end of each day.",
                    "Use Amazon ElastiCache to cache the common queries that the script runs against the database."
                ],
                correct: [1],
                explanation: "The problem is that a read-heavy reporting workload is impacting the primary database. An RDS Read Replica is a perfect solution. It creates an asynchronous copy of the database, and read-only traffic (like the script) can be directed to it, completely isolating it from the primary database instance.",
                focus: "Database Read Performance (RDS Read Replica)",
                focusExplanation: "RDS Read Replicas are the standard solution for offloading read-heavy workloads (like reporting or analytics) from your primary production database. This improves performance for both the read workload and the primary application."
            },
            {
                id: 199,
                text: "A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet. Which solution will meet these requirements?",
                options: [
                    "Configure an S3 gateway endpoint.",
                    "Create an S3 bucket in a private subnet.",
                    "Create an S3 bucket in the same AWS Region as the EC2 instances.",
                    "Configure a NAT gateway in the same subnet as the EC2 instances."
                ],
                correct: [0],
                explanation: "A VPC Gateway Endpoint for S3 creates a private connection between your VPC and S3. When configured, traffic from your EC2 instances to S3 is routed through the endpoint within the AWS network, and does not traverse the internet, a NAT gateway, or an internet gateway.",
                focus: "Private Connectivity to S3 (VPC Gateway Endpoint)",
                focusExplanation: "VPC Endpoints (both Gateway and Interface) are the primary mechanism for allowing resources within a VPC to communicate with AWS services privately, without needing to route traffic over the public internet. This enhances security and can reduce data transfer costs."
            },
            {
                id: 200,
                text: "A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC. Which combination of steps should a solutions architect take to accomplish this? (Choose two.)",
                options: [
                    "Configure a VPC gateway endpoint for Amazon S3 within the VPC.",
                    "Create a bucket policy to make the objects in the S3 bucket public.",
                    "Create a bucket policy that limits access to only the application tier running in the VPC.",
                    "Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.",
                    "E. Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket."
                ],
                correct: [0, 2],
                multiSelect: true,
                explanation: "This solution combines two layers of security. The VPC gateway endpoint ensures that traffic from the VPC to S3 does not traverse the internet. The bucket policy then provides fine-grained access control, ensuring that only requests coming from that specific VPC endpoint (or the instances within the VPC) are allowed to access the bucket.",
                focus: "Secure S3 Access from VPC (Endpoint + Bucket Policy)",
                focusExplanation: "For secure access to S3 from within a VPC, a combination of network controls (VPC Endpoint) and resource-based permissions (S3 Bucket Policy) provides a robust, layered security posture. This is a best practice for locking down sensitive data."
            },
            {
                id: 201,
                text: "A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability. The current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes. A solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay. Which solution meets these requirements?",
                options: [
                    "Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.",
                    "Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand.",
                    "Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.",
                    "Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility."
                ],
                correct: [1],
                explanation: "Amazon Aurora's database cloning feature is extremely fast and efficient. It uses a copy-on-write protocol, which creates a new, fully functional database clone in minutes, regardless of the database size. This allows the dev team to create a staging environment from production data on-demand without impacting the production database's performance.",
                focus: "Staging Environment Creation (Aurora DB Cloning)",
                focusExplanation: "Aurora's fast database cloning is a key feature that solves the common problem of creating test/staging environments from production data. It avoids the performance impact and time consumption of traditional backup-and-restore or mysqldump methods."
            },
            {
                id: 202,
                text: "A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis. Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files. Which solution meets these requirements with the LEAST operational overhead?",
                options: [
                    "Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.",
                    "Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.",
                    "Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.",
                    "Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster."
                ],
                correct: [2],
                explanation: "This is a classic serverless processing pattern. S3 event notifications provide the trigger. SQS decouples the upload from the processing and handles retries. Lambda provides the serverless compute, scaling automatically with demand. DynamoDB is a managed NoSQL database suitable for storing the resulting JSON. This entire architecture has minimal operational overhead.",
                focus: "Serverless File Processing (S3 -> SQS -> Lambda)",
                focusExplanation: "The event-driven pattern of S3 Events -> SQS -> Lambda is one of the most common and powerful architectures on AWS. It is highly scalable, resilient, cost-effective, and requires very little operational management, making it ideal for workloads with variable demand."
            },
            {
                id: 203,
                text: "An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly. What should the solutions architect recommend?",
                options: [
                    "Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.",
                    "Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.",
                    "Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.",
                    "Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database."
                ],
                correct: [3],
                explanation: "To effectively handle the read traffic, the read replica should be provisioned with sufficient resources. Using the same compute and storage as the source database is a best practice to ensure the replica can keep up with replication and serve read queries without becoming a new bottleneck.",
                focus: "RDS Read Replica Sizing",
                focusExplanation: "When creating a read replica to offload read traffic, it's important to size it appropriately. While it can be a smaller instance type if the read load is low, a common best practice is to match the source instance size to prevent performance issues and to have a suitably-sized instance available for promotion in a disaster recovery scenario."
            },
            {
                id: 204,
                text: "An Amazon EC2 administrator created the following policy associated with an IAM group containing several users:\n```json\n{\n    \"Version\": \"2012-10-17\",\n    \"Statement\": [\n        {\n            \"Effect\": \"Allow\",\n            \"Action\": \"ec2:TerminateInstances\",\n            \"Resource\": \"*\",\n            \"Condition\": {\n                \"IpAddress\": {\n                    \"aws:SourceIp\": \"10.100.100.0/24\"\n                }\n            }\n        },\n        {\n            \"Effect\": \"Deny\",\n            \"Action\": \"ec2:*\",\n            \"Resource\": \"*\",\n            \"Condition\": {\n                \"StringNotEquals\": {\n                    \"aws:RequestedRegion\": \"us-east-1\"\n                }\n            }\n        }\n    ]\n}\n```\nWhat is the effect of this policy?",
                options: [
                    "Users can terminate an EC2 instance in any AWS Region except us-east-1.",
                    "Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.",
                    "Users can terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.",
                    "Users cannot terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254."
                ],
                correct: [2],
                explanation: "IAM policies are evaluated together, and an explicit Deny always overrides an Allow. The second statement denies all EC2 actions in any region that is NOT us-east-1. This effectively means actions are only possible in us-east-1. The first statement then allows the `ec2:TerminateInstances` action specifically when the user's source IP is in the `10.100.100.0/24` range. The combination allows termination in us-east-1 from the specified IP range.",
                focus: "IAM Policy Evaluation Logic (Explicit Deny)",
                focusExplanation: "This question tests understanding of IAM policy evaluation, particularly that an explicit `Deny` statement always wins, and how multiple statements combine. The `StringNotEquals` condition in the Deny statement is key; it effectively creates a whitelist for the `us-east-1` region."
            },
            {
                id: 205,
                text: "A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control. Which solution will satisfy these requirements?",
                options: [
                    "Configure Amazon EFS storage and set the Active Directory domain for authentication.",
                    "Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.",
                    "Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.",
                    "Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication."
                ],
                correct: [3],
                explanation: "Amazon FSx for Windows File Server is a fully managed service that provides native Windows file systems. It is the ideal choice for migrating Windows-based applications like SharePoint that require SMB protocol and Active Directory integration for authentication and access control.",
                focus: "Windows Shared Storage on AWS (FSx for Windows)",
                focusExplanation: "When a workload requires a native Windows file system with features like SMB, NTFS, and Active Directory integration, Amazon FSx for Windows File Server is the purpose-built and recommended AWS service."
            },
            {
                id: 206,
                text: "An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email. Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages. What should the solutions architect do to resolve this issue with the LEAST operational overhead?",
                options: [
                    "Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.",
                    "Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.",
                    "Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout.",
                    "Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing."
                ],
                correct: [2],
                explanation: "The issue is that the Lambda function takes longer to process the message than the queue's visibility timeout. When the timeout expires, SQS makes the message visible again, and another Lambda invocation picks it up. The solution is to set the visibility timeout to be longer than the function's processing time, giving it enough time to finish and delete the message before it reappears in the queue.",
                focus: "SQS Duplicate Message Processing (Visibility Timeout)",
                focusExplanation: "In SQS, the visibility timeout is the crucial setting for preventing duplicate processing. It's a period during which SQS prevents other consumers from receiving and processing a message. This timeout must be configured to be longer than the time your consumer (e.g., a Lambda function) takes to process and delete the message."
            },
            {
                id: 207,
                text: "A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be a fully managed. Which solution meets these requirements?",
                options: [
                    "Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.",
                    "Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.",
                    "Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.",
                    "Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system."
                ],
                correct: [3],
                explanation: "Amazon FSx for Lustre is a fully managed, high-performance file system optimized for workloads like HPC, machine learning, and gaming. It is the only fully managed AWS service that provides a Lustre file system, directly meeting the core requirement.",
                focus: "High-Performance File System (FSx for Lustre)",
                focusExplanation: "When you see a requirement for a Lustre file system, the answer is almost always Amazon FSx for Lustre. It is the purpose-built, managed AWS service for this specific high-performance file system."
            },
            {
                id: 208,
                text: "A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.",
                    "Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.",
                    "Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.",
                    "Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes."
                ],
                correct: [2],
                explanation: "This solution meets all requirements with the least overhead. AWS KMS provides a highly available, secure, and managed service for encryption. Using an EC2 role avoids managing credentials. Storing the encrypted data in S3 provides highly available and durable storage automatically, whereas EBS is tied to a single EC2 instance and is less available by comparison.",
                focus: "Secure and HA Data Storage (KMS + S3)",
                focusExplanation: "For secure, managed encryption, AWS KMS is the go-to service. For highly available and durable storage with minimal operational overhead, Amazon S3 is the superior choice over EBS, which is zonal block storage tied to a specific EC2 instance."
            },
            {
                id: 209,
                text: "A company runs a public-facing three-tier web application in a VPC across multiple Availability Zones. Amazon EC2 instances for the application tier running in private subnets need to download software patches from the internet. However, the EC2 instances cannot be directly accessible from the internet. Which actions should be taken to allow the EC2 instances to download the needed patches? (Select TWO.)",
                options: [
                    "Configure a NAT gateway in a public subnet.",
                    "Define a custom route table with a route to the NAT gateway for internet traffic and associate it with the private subnets for the application tier.",
                    "Assign Elastic IP addresses to the EC2 instances.",
                    "Define a custom route table with a route to the internet gateway for internet traffic and associate it with the private subnets for the application tier.",
                    "Configure a NAT instance in a private subnet."
                ],
                correct: [0, 1],
                multiSelect: true,
                explanation: "A NAT gateway forwards traffic from the EC2 instances in the private subnet to the internet or other AWS services, and then sends the response back to the instances. After a NAT gateway is created, the route tables for private subnets must be updated to point internet traffic to the NAT gateway.",
                focus: "Private Subnet Internet Access (NAT Gateway)",
                focusExplanation: "The standard and most robust pattern for allowing instances in a private subnet to access the internet for things like software updates is to use a NAT Gateway in a public subnet and route outbound traffic from the private subnet through it. This provides internet access without exposing the private instances to inbound connections."
            },
            {
                id: 210,
                text: "A solutions architect wants to design a solution to save costs for Amazon EC2 instances that do not need to run during a 2-week company shutdown. The applications running on the EC2 instances store data in instance memory that must be present when the instances resume operation. Which approach should the solutions architect recommend to shut down and resume the EC2 instances?",
                options: [
                    "Modify the application to store the data on instance store volumes. Reattach the volumes while restarting them.",
                    "Snapshot the EC2 instances before stopping them. Restore the snapshot after restarting the instances.",
                    "Run the applications on EC2 instances enabled for hibernation. Hibernate the instances before the 2-week company shutdown.",
                    "Note the Availability Zone for each EC2 instance before stopping it. Restart the instances in the same Availability Zones after the 2-week company shutdown."
                ],
                correct: [2],
                explanation: "Hibernating EC2 instances save the contents of instance memory to an Amazon Elastic Block Store (Amazon EBS) root volume. When the instances restart, the instance memory contents are reloaded.",
                focus: "EC2 Hibernation for State Persistence",
                focusExplanation: "EC2 Hibernation is a feature designed for use cases where you need to stop an instance but preserve its in-memory state (RAM). When hibernated, the instance's RAM is saved to the EBS root volume, allowing it to resume exactly where it left off."
            },
            {
                id: 211,
                text: "A company plans to run a monitoring application on an Amazon EC2 instance in a VPC. Connections are made to the EC2 instance using the instance’s private IPv4 address. A solutions architect needs to design a solution that will allow traffic to be quickly directed to a standby EC2 instance if the application fails and becomes unreachable. Which approach will meet these requirements?",
                options: [
                    "Deploy an Application Load Balancer configured with a listener for the private IP address and register the primary EC2 instance with the load balancer. Upon failure, de-register the instance and register the standby EC2 instance.",
                    "Configure a custom DHCP option set. Configure DHCP to assign the same private IP address to the standby EC2 instance when the primary EC2 instance fails.",
                    "Attach a secondary elastic network interface to the EC2 instance configured with the private IP address. Move the network interface to the standby EC2 instance if the primary EC2 instance becomes unreachable.",
                    "Associate an Elastic IP address with the network interface of the primary EC2 instance. Disassociate the Elastic IP from the primary instance upon failure and associate it with a standby EC2 instance."
                ],
                correct: [2],
                explanation: "A secondary elastic network interface can be added to an EC2 instance. While primary network interfaces cannot be detached from an instance, secondary network interfaces can be detached and attached to a different EC2 instance.",
                focus: "Private IP Failover (ENI Re-attachment)",
                focusExplanation: "To fail over a service that is accessed via a private IP address, the most direct method is to use a secondary Elastic Network Interface (ENI). In a failure event, the ENI (which retains its private IP) can be detached from the failed instance and attached to a standby instance, effectively moving the IP address."
            },
            {
                id: 212,
                text: "An analytics company is planning to offer a web analytics service to its users. The service will require that the users’ webpages include a JavaScript script that makes authenticated GET requests to the company’s Amazon S3 bucket. What must a solutions architect do to ensure that the script will successfully execute?",
                options: [
                    "Enable cross-origin resource sharing (CORS) on the S3 bucket.",
                    "Enable S3 Versioning on the S3 bucket.",
                    "Provide the users with a signed URL for the script.",
                    "Configure an S3 bucket policy to allow public execute privileges."
                ],
                correct: [0],
                explanation: "Web browsers will block running a script that originates from a server with a domain name that is different from the webpage. Amazon S3 can be configured with CORS to send HTTP headers that allow the script to run.",
                focus: "Cross-Origin Resource Sharing (CORS) for S3",
                focusExplanation: "When a web browser tries to make a request to a domain different from the one the page was served from, it enforces the Same-Origin Policy. To allow these requests, the server (in this case, Amazon S3) must be configured with Cross-Origin Resource Sharing (CORS) to return the appropriate HTTP headers."
            },
            {
                id: 213,
                text: "A company’s security team requires that all data stored in the cloud be encrypted at rest at all times using encryption keys stored on premises. Which encryption options meet these requirements? (Select TWO.)",
                options: [
                    "Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3).",
                    "Use server-side encryption with AWS KMS managed encryption keys (SSE-KMS).",
                    "Use server-side encryption with customer-provided encryption keys (SSE-C).",
                    "Use client-side encryption to provide at-rest encryption.",
                    "Use an AWS Lambda function invoked by Amazon S3 events to encrypt the data using the customer’s keys."
                ],
                correct: [2, 3],
                multiSelect: true,
                explanation: "Server-side encryption with customer-provided keys (SSE-C) enables Amazon S3 to encrypt objects on the server side using an encryption key provided in the PUT request. The same key must be provided in the GET requests for Amazon S3 to decrypt the object. Customers also have the option to encrypt data on the client side before uploading it to Amazon S3, and then they can decrypt the data after downloading it. AWS software development kits (SDKs) provide an S3 encryption client that streamlines the process.",
                focus: "Encryption with On-Premises Keys (SSE-C & Client-Side)",
                focusExplanation: "When the requirement is to use keys managed entirely on-premises, there are two main options: 1) Client-Side Encryption, where data is encrypted before it's sent to AWS, or 2) Server-Side Encryption with Customer-Provided Keys (SSE-C), where you provide the key along with the object upload request."
            },
            {
                id: 214,
                text: "A company uses Amazon EC2 Reserved Instances to run its data processing workload. The nightly job typically takes 7 hours to run and must finish within a 10-hour time window. The company anticipates temporary increases in demand at the end of each month that will cause the job to run over the time limit with the capacity of the current resources. Once started, the processing job cannot be interrupted before completion. The company wants to implement a solution that would provide increased resource capacity as cost-effectively as possible. What should a solutions architect do to accomplish this?",
                options: [
                    "Deploy On-Demand Instances during periods of high demand.",
                    "Create a second EC2 reservation for additional instances.",
                    "Deploy Spot Instances during periods of high demand.",
                    "Increase the EC2 instance size in the EC2 reservation to support the increased workload."
                ],
                correct: [0],
                explanation: "While Spot Instances would be the least costly option, they are not suitable for jobs that cannot be interrupted or must complete within a certain time period. On-Demand Instances would be billed for the number of seconds they are running.",
                focus: "Handling Burst Capacity for Uninterruptible Workloads",
                focusExplanation: "When you need temporary, uninterruptible compute capacity to handle burst demand, On-Demand instances are the appropriate choice. Spot Instances are cheaper but can be interrupted, making them unsuitable for jobs that must run to completion."
            },
            {
                id: 215,
                text: "A company runs an online voting system for a weekly live television program. During broadcasts, users submit hundreds of thousands of votes within minutes to a front-end fleet of Amazon EC2 instances that run in an Auto Scaling group. The EC2 instances write the votes to an Amazon RDS database. However, the database is unable to keep up with the requests that come from the EC2 instances. A solutions architect must design a solution that processes the votes in the most efficient manner and without downtime. Which solution meets these requirements?",
                options: [
                    "Migrate the front-end application to AWS Lambda. Use Amazon API Gateway to route user requests to the Lambda functions.",
                    "Scale the database horizontally by converting it to a Multi-AZ deployment. Configure the front-end application to write to both the primary and secondary DB instances.",
                    "Configure the front-end application to send votes to an Amazon Simple Queue Service (Amazon SQS) queue. Provision worker instances to read the SQS queue and write the vote information to the database.",
                    "Use Amazon EventBridge (Amazon CloudWatch Events) to create a scheduled event to re-provision the database with larger, memory optimized instances during voting periods. When voting ends, re-provision the database to use smaller instances."
                ],
                correct: [2],
                explanation: "Decouple the ingestion of votes from the database to allow the voting system to continue processing votes without waiting for the database writes. Add dedicated workers to read from the SQS queue to allow votes to be entered into the database at a controllable rate. The votes will be added to the database as fast as the database can process them, but no votes will be lost.",
                focus: "Decoupling with SQS for High Ingestion Rates",
                focusExplanation: "When a backend system (like a database) cannot handle a high volume of incoming requests, a classic solution is to introduce a queue (like SQS) to decouple the components. The front-end application writes messages to the queue quickly, and a separate fleet of workers consumes from the queue at a sustainable pace for the database."
            },
            {
                id: 216,
                text: "A company has a two-tier application architecture that runs in public and private subnets. Amazon EC2 instances running the web application are in the public subnet and an EC2 instance for the database runs on the private subnet. The web application instances and the database are running in a single Availability Zone (AZ). Which combination of steps should a solutions architect take to provide high availability for this architecture? (Select TWO.)",
                options: [
                    "Create new public and private subnets in the same AZ.",
                    "Create an Amazon EC2 Auto Scaling group and Application Load Balancer spanning multiple AZs for the web application instances.",
                    "Add the existing web application instances to an Auto Scaling group behind an Application Load Balancer.",
                    "Create new public and private subnets in a new AZ. Create a database using an EC2 instance in the public subnet in the new AZ. Migrate the old database contents to the new database.",
                    "Create new public and private subnets in the same VPC, each in a new AZ. Create an Amazon RDS Multi-AZ DB instance in the private subnets. Migrate the old database contents to the new DB instance."
                ],
                correct: [1, 4],
                multiSelect: true,
                explanation: "Create new subnets in a new Availability Zone (AZ) to provide a redundant network. Create an Auto Scaling group with instances in two AZs behind the load balancer to ensure high availability of the web application and redistribution of web traffic between the two public AZs. Create an RDS DB instance in the two private subnets to make the database tier highly available too.",
                focus: "Achieving High Availability (Multi-AZ Architecture)",
                focusExplanation: "High availability on AWS is fundamentally about eliminating single points of failure by architecting across multiple Availability Zones. For a two-tier application, this means deploying the web tier instances in an Auto Scaling Group across multiple AZs and using a Multi-AZ database deployment (like Amazon RDS Multi-AZ)."
            },
            {
                id: 217,
                text: "A website runs a custom web application that receives a burst of traffic each day at noon. The users upload new pictures and content daily, but have been complaining of timeouts. The architecture uses Amazon EC2 Auto Scaling groups, and the application consistently takes 1 minute to initiate upon boot up before responding to user requests. How should a solutions architect redesign the architecture to better respond to changing traffic?",
                options: [
                    "Configure a Network Load Balancer with a slow start configuration.",
                    "Configure Amazon ElastiCache for Redis to offload direct requests from the EC2 instances.",
                    "Configure an Auto Scaling step scaling policy with an EC2 instance warmup condition.",
                    "Configure Amazon CloudFront to use an Application Load Balancer as the origin."
                ],
                correct: [2],
                explanation: "The current configuration puts new EC2 instances into service before they are able to respond to transactions. This could also cause the instances to overscale. With a step scaling policy, you can specify the number of seconds that it takes for a newly launched instance to warm up. Until its specified warm-up time has expired, an EC2 instance is not counted toward the aggregated metrics of the Auto Scaling group. While scaling out, the Auto Scaling logic does not consider EC2 instances that are warming up as part of the current capacity of the Auto Scaling group. Therefore, multiple alarm breaches that fall in the range of the same step adjustment result in a single scaling activity. This ensures that you do not add more instances than you need.",
                focus: "Auto Scaling Warm-up Period",
                focusExplanation: "When instances have a significant initialization time, an Auto Scaling Group health check grace period and instance warm-up period are crucial. The warm-up period prevents the Auto Scaling group from counting an instance towards its capacity metric until it's fully ready to serve traffic, which prevents premature or excessive scaling actions."
            },
            {
                id: 218,
                text: "An application running on AWS uses an Amazon Aurora Multi-AZ DB cluster deployment for its database. When evaluating performance metrics, a solutions architect discovered that the database reads are causing high I/O and adding latency to the write requests against the database. What should the solutions architect do to separate the read requests from the write requests?",
                options: [
                    "Enable read-through caching on the Aurora database.",
                    "Update the application to read from the Multi-AZ standby instance.",
                    "Create an Aurora replica and modify the application to use the appropriate endpoints.",
                    "Create a second Aurora database and link it to the primary database as a read replica."
                ],
                correct: [2],
                explanation: "Aurora Replicas provide a way to offload read traffic. Aurora Replicas share the same underlying storage as the main database, so lag time is generally very low. Aurora Replicas have their own endpoints, so the application will need to be configured to direct read traffic to the new endpoints.",
                focus: "Database Read Scaling (Aurora Replicas)",
                focusExplanation: "The primary way to scale read performance for an Aurora cluster is to add Aurora Replicas. These replicas share the same storage volume as the primary instance, providing low-latency, read-only endpoints that are ideal for offloading read traffic from the primary writer instance."
            },
            {
                id: 219,
                text: "A company runs a public-facing three-tier web application in a VPC across multiple Availability Zones. Amazon EC2 instances for the application tier running in private subnets need to download software patches from the internet. However, the EC2 instances cannot be directly accessible from the internet. Which actions should be taken to allow the EC2 instances to download the needed patches? (Select TWO.)",
                options: [
                    "Configure a NAT gateway in a public subnet.",
                    "Define a custom route table with a route to the NAT gateway for internet traffic and associate it with the private subnets for the application tier.",
                    "Assign Elastic IP addresses to the EC2 instances.",
                    "Define a custom route table with a route to the internet gateway for internet traffic and associate it with the private subnets for the application tier.",
                    "Configure a NAT instance in a private subnet."
                ],
                correct: [0, 1],
                multiSelect: true,
                explanation: "A NAT gateway forwards traffic from the EC2 instances in the private subnet to the internet or other AWS services, and then sends the response back to the instances. After a NAT gateway is created, the route tables for private subnets must be updated to point internet traffic to the NAT gateway.",
                focus: "Private Subnet Internet Access (NAT Gateway)",
                focusExplanation: "The standard and most robust pattern for allowing instances in a private subnet to access the internet for things like software updates is to use a NAT Gateway in a public subnet and route outbound traffic from the private subnet through it. This provides internet access without exposing the private instances to inbound connections."
            },
            {
                id: 220,
                text: "A solutions architect wants to design a solution to save costs for Amazon EC2 instances that do not need to run during a 2-week company shutdown. The applications running on the EC2 instances store data in instance memory that must be present when the instances resume operation. Which approach should the solutions architect recommend to shut down and resume the EC2 instances?",
                options: [
                    "Modify the application to store the data on instance store volumes. Reattach the volumes while restarting them.",
                    "Snapshot the EC2 instances before stopping them. Restore the snapshot after restarting the instances.",
                    "Run the applications on EC2 instances enabled for hibernation. Hibernate the instances before the 2-week company shutdown.",
                    "Note the Availability Zone for each EC2 instance before stopping it. Restart the instances in the same Availability Zones after the 2-week company shutdown."
                ],
                correct: [2],
                explanation: "Hibernating EC2 instances save the contents of instance memory to an Amazon Elastic Block Store (Amazon EBS) root volume. When the instances restart, the instance memory contents are reloaded.",
                focus: "EC2 Hibernation for State Persistence",
                focusExplanation: "EC2 Hibernation is a feature designed for use cases where you need to stop an instance but preserve its in-memory state (RAM). When hibernated, the instance's RAM is saved to the EBS root volume, allowing it to resume exactly where it left off."
            },
            {
                id: 221,
                text: "A company plans to run a monitoring application on an Amazon EC2 instance in a VPC. Connections are made to the EC2 instance using the instance’s private IPv4 address. A solutions architect needs to design a solution that will allow traffic to be quickly directed to a standby EC2 instance if the application fails and becomes unreachable. Which approach will meet these requirements?",
                options: [
                    "Deploy an Application Load Balancer configured with a listener for the private IP address and register the primary EC2 instance with the load balancer. Upon failure, de-register the instance and register the standby EC2 instance.",
                    "Configure a custom DHCP option set. Configure DHCP to assign the same private IP address to the standby EC2 instance when the primary EC2 instance fails.",
                    "Attach a secondary elastic network interface to the EC2 instance configured with the private IP address. Move the network interface to the standby EC2 instance if the primary EC2 instance becomes unreachable.",
                    "Associate an Elastic IP address with the network interface of the primary EC2 instance. Disassociate the Elastic IP from the primary instance upon failure and associate it with a standby EC2 instance."
                ],
                correct: [2],
                explanation: "A secondary elastic network interface can be added to an EC2 instance. While primary network interfaces cannot be detached from an instance, secondary network interfaces can be detached and attached to a different EC2 instance.",
                focus: "Private IP Failover (ENI Re-attachment)",
                focusExplanation: "To fail over a service that is accessed via a private IP address, the most direct method is to use a secondary Elastic Network Interface (ENI). In a failure event, the ENI (which retains its private IP) can be detached from the failed instance and attached to a standby instance, effectively moving the IP address."
            },
            {
                id: 222,
                text: "An analytics company is planning to offer a web analytics service to its users. The service will require that the users’ webpages include a JavaScript script that makes authenticated GET requests to the company’s Amazon S3 bucket. What must a solutions architect do to ensure that the script will successfully execute?",
                options: [
                    "Enable cross-origin resource sharing (CORS) on the S3 bucket.",
                    "Enable S3 Versioning on the S3 bucket.",
                    "Provide the users with a signed URL for the script.",
                    "Configure an S3 bucket policy to allow public execute privileges."
                ],
                correct: [0],
                explanation: "Web browsers will block running a script that originates from a server with a domain name that is different from the webpage. Amazon S3 can be configured with CORS to send HTTP headers that allow the script to run.",
                focus: "Cross-Origin Resource Sharing (CORS) for S3",
                focusExplanation: "When a web browser tries to make a request to a domain different from the one the page was served from, it enforces the Same-Origin Policy. To allow these requests, the server (in this case, Amazon S3) must be configured with Cross-Origin Resource Sharing (CORS) to return the appropriate HTTP headers."
            },
            {
                id: 223,
                text: "A company’s security team requires that all data stored in the cloud be encrypted at rest at all times using encryption keys stored on premises. Which encryption options meet these requirements? (Select TWO.)",
                options: [
                    "Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3).",
                    "Use server-side encryption with AWS KMS managed encryption keys (SSE-KMS).",
                    "Use server-side encryption with customer-provided encryption keys (SSE-C).",
                    "Use client-side encryption to provide at-rest encryption.",
                    "Use an AWS Lambda function invoked by Amazon S3 events to encrypt the data using the customer’s keys."
                ],
                correct: [2, 3],
                multiSelect: true,
                explanation: "Server-side encryption with customer-provided keys (SSE-C) enables Amazon S3 to encrypt objects on the server side using an encryption key provided in the PUT request. The same key must be provided in the GET requests for Amazon S3 to decrypt the object. Customers also have the option to encrypt data on the client side before uploading it to Amazon S3, and then they can decrypt the data after downloading it. AWS software development kits (SDKs) provide an S3 encryption client that streamlines the process.",
                focus: "Encryption with On-Premises Keys (SSE-C & Client-Side)",
                focusExplanation: "When the requirement is to use keys managed entirely on-premises, there are two main options: 1) Client-Side Encryption, where data is encrypted before it's sent to AWS, or 2) Server-Side Encryption with Customer-Provided Keys (SSE-C), where you provide the key along with the object upload request."
            },
            {
                id: 224,
                text: "A company uses Amazon EC2 Reserved Instances to run its data processing workload. The nightly job typically takes 7 hours to run and must finish within a 10-hour time window. The company anticipates temporary increases in demand at the end of each month that will cause the job to run over the time limit with the capacity of the current resources. Once started, the processing job cannot be interrupted before completion. The company wants to implement a solution that would provide increased resource capacity as cost-effectively as possible. What should a solutions architect do to accomplish this?",
                options: [
                    "Deploy On-Demand Instances during periods of high demand.",
                    "Create a second EC2 reservation for additional instances.",
                    "Deploy Spot Instances during periods of high demand.",
                    "Increase the EC2 instance size in the EC2 reservation to support the increased workload."
                ],
                correct: [0],
                explanation: "While Spot Instances would be the least costly option, they are not suitable for jobs that cannot be interrupted or must complete within a certain time period. On-Demand Instances would be billed for the number of seconds they are running.",
                focus: "Handling Burst Capacity for Uninterruptible Workloads",
                focusExplanation: "When you need temporary, uninterruptible compute capacity to handle burst demand, On-Demand instances are the appropriate choice. Spot Instances are cheaper but can be interrupted, making them unsuitable for jobs that must run to completion."
            },
            {
                id: 225,
                text: "A company runs an online voting system for a weekly live television program. During broadcasts, users submit hundreds of thousands of votes within minutes to a front-end fleet of Amazon EC2 instances that run in an Auto Scaling group. The EC2 instances write the votes to an Amazon RDS database. However, the database is unable to keep up with the requests that come from the EC2 instances. A solutions architect must design a solution that processes the votes in the most efficient manner and without downtime. Which solution meets these requirements?",
                options: [
                    "Migrate the front-end application to AWS Lambda. Use Amazon API Gateway to route user requests to the Lambda functions.",
                    "Scale the database horizontally by converting it to a Multi-AZ deployment. Configure the front-end application to write to both the primary and secondary DB instances.",
                    "Configure the front-end application to send votes to an Amazon Simple Queue Service (Amazon SQS) queue. Provision worker instances to read the SQS queue and write the vote information to the database.",
                    "Use Amazon EventBridge (Amazon CloudWatch Events) to create a scheduled event to re-provision the database with larger, memory optimized instances during voting periods. When voting ends, re-provision the database to use smaller instances."
                ],
                correct: [2],
                explanation: "Decouple the ingestion of votes from the database to allow the voting system to continue processing votes without waiting for the database writes. Add dedicated workers to read from the SQS queue to allow votes to be entered into the database at a controllable rate. The votes will be added to the database as fast as the database can process them, but no votes will be lost.",
                focus: "Decoupling with SQS for High Ingestion Rates",
                focusExplanation: "When a backend system (like a database) cannot handle a high volume of incoming requests, a classic solution is to introduce a queue (like SQS) to decouple the components. The front-end application writes messages to the queue quickly, and a separate fleet of workers consumes from the queue at a sustainable pace for the database."
            },
            {
                id: 226,
                text: "A company has a two-tier application architecture that runs in public and private subnets. Amazon EC2 instances running the web application are in the public subnet and an EC2 instance for the database runs on the private subnet. The web application instances and the database are running in a single Availability Zone (AZ). Which combination of steps should a solutions architect take to provide high availability for this architecture? (Select TWO.)",
                options: [
                    "Create new public and private subnets in the same AZ.",
                    "Create an Amazon EC2 Auto Scaling group and Application Load Balancer spanning multiple AZs for the web application instances.",
                    "Add the existing web application instances to an Auto Scaling group behind an Application Load Balancer.",
                    "Create new public and private subnets in a new AZ. Create a database using an EC2 instance in the public subnet in the new AZ. Migrate the old database contents to the new database.",
                    "Create new public and private subnets in the same VPC, each in a new AZ. Create an Amazon RDS Multi-AZ DB instance in the private subnets. Migrate the old database contents to the new DB instance."
                ],
                correct: [1, 4],
                multiSelect: true,
                explanation: "Create new subnets in a new Availability Zone (AZ) to provide a redundant network. Create an Auto Scaling group with instances in two AZs behind the load balancer to ensure high availability of the web application and redistribution of web traffic between the two public AZs. Create an RDS DB instance in the two private subnets to make the database tier highly available too.",
                focus: "Achieving High Availability (Multi-AZ Architecture)",
                focusExplanation: "High availability on AWS is fundamentally about eliminating single points of failure by architecting across multiple Availability Zones. For a two-tier application, this means deploying the web tier instances in an Auto Scaling Group across multiple AZs and using a Multi-AZ database deployment (like Amazon RDS Multi-AZ)."
            },
            {
                id: 227,
                text: "A website runs a custom web application that receives a burst of traffic each day at noon. The users upload new pictures and content daily, but have been complaining of timeouts. The architecture uses Amazon EC2 Auto Scaling groups, and the application consistently takes 1 minute to initiate upon boot up before responding to user requests. How should a solutions architect redesign the architecture to better respond to changing traffic?",
                options: [
                    "Configure a Network Load Balancer with a slow start configuration.",
                    "Configure Amazon ElastiCache for Redis to offload direct requests from the EC2 instances.",
                    "Configure an Auto Scaling step scaling policy with an EC2 instance warmup condition.",
                    "Configure Amazon CloudFront to use an Application Load Balancer as the origin."
                ],
                correct: [2],
                explanation: "The current configuration puts new EC2 instances into service before they are able to respond to transactions. This could also cause the instances to overscale. With a step scaling policy, you can specify the number of seconds that it takes for a newly launched instance to warm up. Until its specified warm-up time has expired, an EC2 instance is not counted toward the aggregated metrics of the Auto Scaling group. While scaling out, the Auto Scaling logic does not consider EC2 instances that are warming up as part of the current capacity of the Auto Scaling group. Therefore, multiple alarm breaches that fall in the range of the same step adjustment result in a single scaling activity. This ensures that you do not add more instances than you need.",
                focus: "Auto Scaling Warm-up Period",
                focusExplanation: "When instances have a significant initialization time, an Auto Scaling Group health check grace period and instance warm-up period are crucial. The warm-up period prevents the Auto Scaling group from counting an instance towards its capacity metric until it's fully ready to serve traffic, which prevents premature or excessive scaling actions."
            },
            {
                id: 228,
                text: "An application running on AWS uses an Amazon Aurora Multi-AZ DB cluster deployment for its database. When evaluating performance metrics, a solutions architect discovered that the database reads are causing high I/O and adding latency to the write requests against the database. What should the solutions architect do to separate the read requests from the write requests?",
                options: [
                    "Enable read-through caching on the Aurora database.",
                    "Update the application to read from the Multi-AZ standby instance.",
                    "Create an Aurora replica and modify the application to use the appropriate endpoints.",
                    "Create a second Aurora database and link it to the primary database as a read replica."
                ],
                correct: [2],
                explanation: "Aurora Replicas provide a way to offload read traffic. Aurora Replicas share the same underlying storage as the main database, so lag time is generally very low. Aurora Replicas have their own endpoints, so the application will need to be configured to direct read traffic to the new endpoints.",
                focus: "Database Read Scaling (Aurora Replicas)",
                focusExplanation: "The primary way to scale read performance for an Aurora cluster is to add Aurora Replicas. These replicas share the same storage volume as the primary instance, providing low-latency, read-only endpoints that are ideal for offloading read traffic from the primary writer instance."
            },
            {
                id: 229,
                text: "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity. Which solution meets these requirements?",
                options: [
                    "Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.",
                    "Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.",
                    "Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.",
                    "Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region."
                ],
                correct: [0],
                explanation: "S3 Transfer Acceleration is ideal for long-distance, high-speed transfers to S3, using AWS Edge Locations to speed up uploads. It minimizes operational complexity and is designed for large, distributed data sets.",
                focus: "S3 Transfer Acceleration & Global Data Aggregation",
                focusExplanation: "S3 Transfer Acceleration leverages AWS Edge Locations to optimize and accelerate data transfers over long distances, making it ideal for global data aggregation use cases."
            },
            {
                id: 230,
                text: "A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture. What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?",
                options: [
                    "Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.",
                    "Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.",
                    "Use Amazon Athena directly with Amazon S3 to run the queries as needed.",
                    "Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed."
                ],
                correct: [2],
                explanation: "Amazon Athena allows you to run SQL queries directly on data stored in S3, with no infrastructure to manage and minimal setup, making it the lowest operational overhead solution.",
                focus: "Serverless Analytics (Athena)",
                focusExplanation: "Athena is a serverless, pay-per-query service that enables ad-hoc analysis of data in S3 using standard SQL, with no need for ETL or data movement."
            },
            {
                id: 231,
                text: "A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations. Which solution meets these requirements with the LEAST amount of operational overhead?",
                options: [
                    "Add the aws:PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.",
                    "Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.",
                    "Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.",
                    "Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy."
                ],
                correct: [0],
                explanation: "Using aws:PrincipalOrgID in the S3 bucket policy restricts access to principals within the same AWS Organization, minimizing policy management overhead.",
                focus: "S3 Bucket Policy & AWS Organizations",
                focusExplanation: "The aws:PrincipalOrgID condition key allows you to restrict access to resources to only principals within a specific AWS Organization, simplifying cross-account access control."
            },
            {
                id: 232,
                text: "An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet. Which solution will provide private network connectivity to Amazon S3?",
                options: [
                    "Create a gateway VPC endpoint to the S3 bucket.",
                    "Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.",
                    "Create an instance profile on Amazon EC2 to allow S3 access.",
                    "Create an Amazon API Gateway API with a private link to access the S3 endpoint."
                ],
                correct: [0],
                explanation: "A gateway VPC endpoint enables private connectivity to S3 from within a VPC, without requiring internet access or NAT devices.",
                focus: "VPC Endpoints (Gateway Endpoint for S3)",
                focusExplanation: "Gateway VPC endpoints provide private, secure connectivity to S3 and DynamoDB from within a VPC, without using public IPs or traversing the internet."
            },
            {
                id: 233,
                text: "A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time. What should a solutions architect propose to ensure users see all of their documents at once?",
                options: [
                    "Copy the data so both EBS volumes contain all the documents.",
                    "Configure the Application Load Balancer to direct a user to the server with the documents.",
                    "Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS.",
                    "Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server."
                ],
                correct: [2],
                explanation: "Amazon EFS provides a shared file system accessible by multiple EC2 instances, ensuring all users see the same documents regardless of which instance serves their request.",
                focus: "Shared Storage (Amazon EFS)",
                focusExplanation: "Amazon EFS enables scalable, shared file storage for use with EC2, supporting high availability and consistency across multiple instances."
            },
            {
                id: 234,
                text: "A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth. Which solution will meet these requirements?",
                options: [
                    "Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.",
                    "Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.",
                    "Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.",
                    "Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway."
                ],
                correct: [1],
                explanation: "AWS Snowball Edge enables large-scale data transfer to AWS with minimal network bandwidth usage, as the data is physically shipped to AWS.",
                focus: "Large-Scale Data Migration (AWS Snowball Edge)",
                focusExplanation: "AWS Snowball Edge is designed for petabyte-scale data transfer, minimizing network impact by using physical devices shipped to AWS."
            },
            {
                id: 235,
                text: "A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?",
                options: [
                    "Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.",
                    "Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.",
                    "Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.",
                    "Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SQS) subscriptions. Configure the consumer applications to process the messages from the queues."
                ],
                correct: [3],
                explanation: "SNS with SQS subscriptions allows for high scalability and decoupling, enabling multiple consumers to process messages independently and at scale.",
                focus: "Event-Driven Architecture (SNS + SQS)",
                focusExplanation: "Combining SNS and SQS enables scalable, decoupled, and fan-out message processing architectures for variable and bursty workloads."
            },
            {
                id: 236,
                text: "A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability. How should a solutions architect design the architecture to meet these requirements?",
                options: [
                    "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.",
                    "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.",
                    "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.",
                    "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes."
                ],
                correct: [1],
                explanation: "Using SQS for job coordination and scaling EC2 compute nodes based on queue depth provides a resilient, scalable, and decoupled architecture.",
                focus: "Modern Distributed Systems (SQS + Auto Scaling)",
                focusExplanation: "SQS decouples job producers and consumers, while Auto Scaling based on queue depth ensures resources match workload demand."
            },
            {
                id: 237,
                text: "A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed. The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues. Which solution will meet these requirements?",
                options: [
                    "Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.",
                    "Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.",
                    "Create an Amazon FSx for Windows File Server file system to extend the company's storage space.",
                    "Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days."
                ],
                correct: [1],
                explanation: "S3 File Gateway extends on-premises storage to S3, and lifecycle policies automate archival of infrequently accessed files, solving both capacity and lifecycle management needs.",
                focus: "Hybrid Storage & Lifecycle Management (S3 File Gateway)",
                focusExplanation: "S3 File Gateway integrates on-premises environments with S3, and lifecycle policies automate cost-effective data archiving."
            },
            {
                id: 238,
                text: "A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received. Which solution will meet these requirements?",
                options: [
                    "Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.",
                    "Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.",
                    "Use an API Gateway authorizer to block any requests while the application processes an order.",
                    "Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing."
                ],
                correct: [1],
                explanation: "SQS FIFO queues guarantee order of message processing, which is required for order processing workflows.",
                focus: "Ordered Processing (SQS FIFO Queue)",
                focusExplanation: "SQS FIFO queues ensure messages are processed in the order they are received, which is critical for certain business workflows."
            },
            {
                id: 239,
                text: "A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management. What should a solutions architect do to accomplish this goal?",
                options: [
                    "Use AWS Secrets Manager. Turn on automatic rotation.",
                    "Use AWS Systems Manager Parameter Store. Turn on automatic rotation.",
                    "Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.",
                    "Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume."
                ],
                correct: [0],
                explanation: "AWS Secrets Manager automates credential rotation and management, reducing operational overhead and improving security.",
                focus: "Credential Management (Secrets Manager)",
                focusExplanation: "Secrets Manager provides secure storage, access, and automatic rotation of credentials for AWS resources."
            },
            {
                id: 240,
                text: "A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53. What should a solutions architect do to meet these requirements?",
                options: [
                    "Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.",
                    "Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Configure Route 53 to route traffic to the CloudFront distribution.",
                    "Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.",
                    "Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application."
                ],
                correct: [0],
                explanation: "CloudFront with both S3 and ALB as origins enables caching and acceleration for both static and dynamic content, reducing latency globally.",
                focus: "Performance Optimization (CloudFront Multi-Origin)",
                focusExplanation: "CloudFront can cache and accelerate both static and dynamic content by using multiple origins, improving performance for global users."
            },
            {
                id: 241,
                text: "A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.",
                    "Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.",
                    "Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.",
                    "Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets."
                ],
                correct: [0],
                explanation: "AWS Secrets Manager supports multi-Region replication and scheduled rotation, minimizing operational overhead for credential management across Regions.",
                focus: "Multi-Region Secret Management (Secrets Manager)",
                focusExplanation: "Secrets Manager provides automated, cross-Region secret replication and rotation for secure, low-overhead credential management."
            },
            {
                id: 242,
                text: "A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance. The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability. Which solution will meet these requirements?",
                options: [
                    "Use Amazon Redshift with a single node for leader and compute functionality.",
                    "Use Amazon RDS with a Single-AZ deployment. Configure Amazon RDS to add reader instances in a different Availability Zone.",
                    "Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.",
                    "Use Amazon ElastiCache for Memcached with EC2 Spot Instances."
                ],
                correct: [2],
                explanation: "Aurora with Multi-AZ and Aurora Replicas provides high availability and can automatically scale read capacity to meet unpredictable workloads.",
                focus: "Database Scalability (Aurora Auto Scaling)",
                focusExplanation: "Aurora Auto Scaling with Aurora Replicas enables seamless scaling of read workloads and high availability for database-backed applications."
            },
            {
                id: 243,
                text: "A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud. Which solution will meet these requirements?",
                options: [
                    "Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC.",
                    "Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.",
                    "Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC.",
                    "Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC."
                ],
                correct: [2],
                explanation: "AWS Network Firewall is a managed service for traffic inspection and filtering, providing similar functionality to on-premises inspection servers.",
                focus: "Network Security (AWS Network Firewall)",
                focusExplanation: "AWS Network Firewall enables stateful, managed traffic inspection and filtering for VPCs, supporting compliance and security requirements."
            },
            {
                id: 244,
                text: "A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access. Which solution will meet these requirements?",
                options: [
                    "Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.",
                    "Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.",
                    "Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.",
                    "Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports."
                ],
                correct: [1],
                explanation: "Amazon QuickSight supports data visualization from multiple sources and allows sharing dashboards with specific users and groups for access control.",
                focus: "Data Visualization & Access Control (QuickSight)",
                focusExplanation: "QuickSight enables secure, scalable data visualization and sharing, with granular access control for different user groups."
            },{
                id: 245,
                text: "A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket. What should the solutions architect do to meet this requirement?",
                options: [
                    "Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances.",
                    "Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.",
                    "Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.",
                    "Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances."
                ],
                correct: [0],
                explanation: "Attaching an IAM role with the necessary permissions to the EC2 instances allows them to access the S3 bucket securely and without hardcoding credentials.",
                focus: "IAM Roles for EC2",
                focusExplanation: "IAM roles are the recommended way to grant AWS service permissions to EC2 instances, avoiding the need for static credentials."
            },
            {
                id: 246,
                text: "An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket. Which combination of actions will meet these requirements? (Choose two.)",
                options: [
                    "Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.",
                    "Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.",
                    "Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.",
                    "Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.",
                    "Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon Simple Notification Service (Amazon SNS) topic with the application owner's email address for further processing."
                ],
                correct: [0, 1],
                explanation: "Using SQS as a buffer and Lambda as the processor ensures durability and scalability. The S3 bucket notifies SQS, and Lambda processes messages from SQS.",
                focus: "Event-driven Serverless Processing",
                focusExplanation: "Combining S3 event notifications, SQS, and Lambda is a best practice for scalable, decoupled, and reliable serverless workflows."
            },
            {
                id: 247,
                text: "A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets. A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.",
                    "Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.",
                    "Deploy a transit gateway in the inspection VPC. Configure route tables to route the incoming packets through the transit gateway.",
                    "Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance."
                ],
                correct: [3],
                explanation: "Gateway Load Balancer and its endpoint provide seamless, scalable, and low-overhead traffic inspection with third-party appliances.",
                focus: "Traffic Inspection with Gateway Load Balancer",
                focusExplanation: "Gateway Load Balancer is the AWS-recommended way to insert virtual appliances for traffic inspection in a scalable, managed fashion."
            },
            {
                id: 248,
                text: "A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance. A solutions architect needs to minimize the time that is required to clone the production data into the test environment. Which solution will meet these requirements?",
                options: [
                    "Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.",
                    "Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.",
                    "Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.",
                    "Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment."
                ],
                correct: [3],
                explanation: "EBS Fast Snapshot Restore allows new volumes to be fully-initialized instantly, providing immediate high performance and minimizing clone time.",
                focus: "EBS Fast Snapshot Restore",
                focusExplanation: "Fast Snapshot Restore is the best way to quickly and efficiently clone EBS volumes for test/dev environments with high I/O needs."
            },
            {
                id: 249,
                text: "An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.",
                    "Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.",
                    "Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.",
                    "Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB."
                ],
                correct: [3],
                explanation: "S3 + CloudFront for static content, API Gateway + Lambda for backend, and DynamoDB for data provide a fully managed, highly scalable, and low-latency solution.",
                focus: "Serverless Web Architecture",
                focusExplanation: "Using S3, CloudFront, API Gateway, Lambda, and DynamoDB is the AWS-recommended serverless stack for scalable, low-maintenance web applications."
            },
            {
                id: 250,
                text: "A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files. Which storage option meets these requirements?",
                options: [
                    "S3 Standard",
                    "S3 Intelligent-Tiering",
                    "S3 Standard-Infrequent Access (S3 Standard-IA)",
                    "S3 One Zone-Infrequent Access (S3 One Zone-IA)"
                ],
                correct: [1],
                explanation: "S3 Intelligent-Tiering automatically moves objects between frequent and infrequent access tiers, optimizing cost for unpredictable access patterns, and is multi-AZ resilient.",
                focus: "S3 Intelligent-Tiering",
                focusExplanation: "S3 Intelligent-Tiering is ideal for unpredictable access patterns and provides automatic cost optimization and high durability."
            },
            {
                id: 251,
                text: "A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely. Which storage solution will meet these requirements MOST cost-effectively?",
                options: [
                    "Configure S3 Intelligent-Tiering to automatically migrate objects.",
                    "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.",
                    "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.",
                    "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month."
                ],
                correct: [1],
                explanation: "Transitioning to S3 Glacier Deep Archive after 1 month minimizes long-term storage costs for rarely accessed data.",
                focus: "S3 Lifecycle Management",
                focusExplanation: "Lifecycle policies automate cost optimization by transitioning data to the most cost-effective storage class based on access patterns."
            },
            {
                id: 252,
                text: "A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling. How should the solutions architect generate the information with the LEAST operational overhead?",
                options: [
                    "Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.",
                    "Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.",
                    "Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.",
                    "Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types."
                ],
                correct: [1],
                explanation: "Cost Explorer provides built-in, granular filtering and visualization for cost analysis with minimal setup.",
                focus: "Cost Analysis with Cost Explorer",
                focusExplanation: "Cost Explorer is the primary AWS tool for analyzing and visualizing cost and usage data with minimal operational overhead."
            },
            {
                id: 253,
                text: "A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database. During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort. Which solution will meet these requirements?",
                options: [
                    "Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.",
                    "Change the platform from Aurora to Amazon DynamoDB. Provision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.",
                    "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).",
                    "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue."
                ],
                correct: [3],
                explanation: "Using SQS as a buffer between Lambda functions decouples ingestion from database writes, improving scalability and reliability.",
                focus: "Decoupling with SQS",
                focusExplanation: "SQS is a best practice for decoupling and scaling serverless workflows, especially when downstream systems may be overwhelmed."
            },
            {
                id: 254,
                text: "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. What should a solutions architect do to accomplish this goal?",
                options: [
                    "Turn on AWS Config with the appropriate rules.",
                    "Turn on AWS Trusted Advisor with the appropriate checks.",
                    "Turn on Amazon Inspector with the appropriate assessment template.",
                    "Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events)."
                ],
                correct: [0],
                explanation: "AWS Config tracks and evaluates resource configurations, including S3 bucket policies, and can alert on unauthorized changes.",
                focus: "Configuration Compliance (AWS Config)",
                focusExplanation: "AWS Config is the AWS service for tracking, auditing, and evaluating resource configurations for compliance and security."
            },
            {
                id: 255,
                text: "A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege. Which solution will meet these requirements?",
                options: [
                    "Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.",
                    "Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.",
                    "Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.",
                    "Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard."
                ],
                correct: [0],
                explanation: "CloudWatch dashboards can be shared securely via a link to specific email addresses, following least privilege.",
                focus: "CloudWatch Dashboard Sharing",
                focusExplanation: "CloudWatch supports secure, shareable dashboards for users without AWS accounts, following least privilege principles."
            },
            {
                id: 256,
                text: "A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory. Which solution will meet these requirements?",
                options: [
                    "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
                    "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
                    "Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.",
                    "Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console."
                ],
                correct: [0],
                explanation: "A one-way trust with AWS Directory Service for Microsoft AD allows AWS SSO to use on-premises AD for authentication across all AWS accounts.",
                focus: "AWS SSO with On-Premises AD",
                focusExplanation: "AWS SSO integrates with on-premises AD via Directory Service and trust relationships for centralized user management."
            },
            {
                id: 257,
                text: "A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions. The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions. Which solution will meet these requirements?",
                options: [
                    "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.",
                    "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.",
                    "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin.",
                    "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin."
                ],
                correct: [0],
                explanation: "Global Accelerator with NLB endpoints provides low-latency routing and automatic failover for UDP-based services across Regions.",
                focus: "Global Accelerator for Multi-Region UDP",
                focusExplanation: "AWS Global Accelerator is the recommended solution for global, low-latency, and highly available routing, especially for UDP workloads."
            },
            {
                id: 258,
                text: "A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance. Which solution meets these requirements MOST cost-effectively?",
                options: [
                    "Stop the DB instance when tests are completed. Restart the DB instance when required.",
                    "Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.",
                    "Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.",
                    "Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required."
                ],
                correct: [2],
                explanation: "Creating a snapshot and terminating the DB instance eliminates costs when not in use. Restoring from snapshot is cost-effective for infrequent, scheduled workloads.",
                focus: "Cost Optimization for RDS",
                focusExplanation: "Snapshots allow you to stop paying for compute when the DB is not needed, while preserving data and configuration."
            },
            {
                id: 259,
                text: "A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances, Amazon RDS DB instances, and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?",
                options: [
                    "Use AWS Config rules to define and detect resources that are not properly tagged.",
                    "Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.",
                    "Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.",
                    "Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code."
                ],
                correct: [0],
                explanation: "AWS Config rules can automatically detect and report on resources that do not meet tagging requirements, minimizing manual effort.",
                focus: "Resource Tag Compliance (AWS Config)",
                focusExplanation: "AWS Config is the best tool for enforcing and auditing resource tagging policies across AWS services."
            },
            {
                id: 260,
                text: "A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?",
                options: [
                    "Containerize the website and host it in AWS Fargate.",
                    "Create an Amazon S3 bucket and host the website there.",
                    "Deploy a web server on an Amazon EC2 instance to host the website.",
                    "Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework."
                ],
                correct: [1],
                explanation: "S3 static website hosting is the most cost-effective and scalable solution for static content.",
                focus: "Static Website Hosting (S3)",
                focusExplanation: "Amazon S3 is the recommended service for hosting static websites due to its low cost, scalability, and simplicity."
            },
            {
                id: 261,
                text: "A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend to meet these requirements?",
                options: [
                    "Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.",
                    "Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.",
                    "Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.",
                    "Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3."
                ],
                correct: [2],
                explanation: "Kinesis Data Streams with Lambda for transformation and DynamoDB for storage provides scalable, near-real-time, and low-latency processing.",
                focus: "Real-Time Data Processing (Kinesis + Lambda)",
                focusExplanation: "Kinesis Data Streams and Lambda are the AWS-recommended solution for scalable, real-time data ingestion and transformation."
            },
            {
                id: 262,
                text: "A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources. What should a solutions architect do to meet these requirements?",
                options: [
                    "Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.",
                    "Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.",
                    "Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.",
                    "Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls."
                ],
                correct: [1],
                explanation: "AWS Config tracks configuration changes, and CloudTrail records API calls, together providing full compliance and auditability.",
                focus: "Compliance Auditing (Config + CloudTrail)",
                focusExplanation: "AWS Config and CloudTrail are the standard AWS services for compliance, governance, and auditing."
            },
            {
                id: 263,
                text: "A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks. Which solution meets these requirements?",
                options: [
                    "Enable Amazon GuardDuty on the account.",
                    "Enable Amazon Inspector on the EC2 instances.",
                    "Enable AWS Shield and assign Amazon Route 53 to it.",
                    "Enable AWS Shield Advanced and assign the ELB to it."
                ],
                correct: [3],
                explanation: "AWS Shield Advanced provides enhanced DDoS protection for ELB and other AWS resources.",
                focus: "DDoS Protection (AWS Shield Advanced)",
                focusExplanation: "AWS Shield Advanced is the recommended solution for protecting public-facing AWS resources from large-scale DDoS attacks."
            },
            {
                id: 264,
                text: "A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.",
                    "Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.",
                    "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.",
                    "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets."
                ],
                correct: [1],
                explanation: "A multi-Region KMS key allows encryption and decryption in both Regions with the same logical key, minimizing operational overhead.",
                focus: "Multi-Region Encryption (KMS)",
                focusExplanation: "Multi-Region KMS keys are designed for cross-Region encryption and decryption with minimal management."
            },
            {
                id: 265,
                text: "A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Use the EC2 serial console to directly access the terminal interface of each instance for administration.",
                    "Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.",
                    "Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.",
                    "Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel."
                ],
                correct: [1],
                explanation: "Session Manager provides secure, auditable, and agentless access to EC2 instances without opening inbound ports or managing SSH keys.",
                focus: "Secure Remote Access (Session Manager)",
                focusExplanation: "Session Manager is the AWS-recommended solution for secure, repeatable, and low-overhead remote administration of EC2."
            },
            {
                id: 266,
                text: "A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website. Which solution meets these requirements MOST cost-effectively?",
                options: [
                    "Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.",
                    "Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.",
                    "Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.",
                    "Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint."
                ],
                correct: [2],
                explanation: "CloudFront is a global CDN that caches content at edge locations, reducing latency for users worldwide at low cost.",
                focus: "Global Content Delivery (CloudFront)",
                focusExplanation: "CloudFront is the AWS-recommended solution for global, low-latency, and cost-effective content delivery."
            },
            {
                id: 267,
                text: "A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website. The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem. Which solution addresses this performance issue?",
                options: [
                    "Change the storage type to Provisioned IOPS SSD.",
                    "Change the DB instance to a memory optimized instance class.",
                    "Change the DB instance to a burstable performance instance class.",
                    "Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication."
                ],
                correct: [0],
                explanation: "Provisioned IOPS SSD provides consistent, high-performance storage for write-intensive workloads, solving the insert latency issue.",
                focus: "RDS Storage Performance (Provisioned IOPS)",
                focusExplanation: "Provisioned IOPS is the recommended storage type for high-throughput, low-latency database workloads."
            },
            {
                id: 268,
                text: "A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis. The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days. What is the MOST operationally efficient solution that meets these requirements?",
                options: [
                    "Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.",
                    "Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.",
                    "Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.",
                    "Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue."
                ],
                correct: [0],
                explanation: "Kinesis Data Firehose to S3 with lifecycle policies is fully managed, highly available, and cost-effective for large-scale, time-based data retention.",
                focus: "Streaming Data Ingestion (Kinesis Firehose + S3)",
                focusExplanation: "Kinesis Data Firehose and S3 with lifecycle policies is the AWS-recommended solution for scalable, low-maintenance data ingestion and retention."
            },
            {
                id: 269,
                text: "A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.",
                    "Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.",
                    "Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.",
                    "Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete."
                ],
                correct: [1],
                explanation: "Amazon AppFlow is a fully managed integration service for SaaS-to-S3 data transfer, reducing operational overhead and improving performance.",
                focus: "SaaS Integration (AppFlow)",
                focusExplanation: "AppFlow is the AWS-recommended service for secure, scalable, and low-maintenance SaaS data integration."
            },
            {
                id: 270,
                text: "A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges. What is the MOST cost-effective way for the company to avoid Regional data transfer charges?",
                options: [
                    "Launch the NAT gateway in each Availability Zone.",
                    "Replace the NAT gateway with a NAT instance.",
                    "Deploy a gateway VPC endpoint for Amazon S3.",
                    "Provision an EC2 Dedicated Host to run the EC2 instances."
                ],
                correct: [2],
                explanation: "A gateway VPC endpoint for S3 allows EC2 instances to access S3 without incurring NAT gateway data transfer charges, as traffic stays within the AWS network.",
                focus: "VPC Endpoints for S3 Cost Optimization",
                focusExplanation: "Gateway VPC endpoints provide private, cost-effective connectivity to S3, avoiding NAT gateway and regional data transfer charges."
            },
            {
                id: 271,
                text: "A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users. Which solution meets these requirements?",
                options: [
                    "Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.",
                    "Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.",
                    "Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.",
                    "Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account."
                ],
                correct: [1],
                explanation: "AWS Direct Connect provides a dedicated, high-bandwidth connection to AWS, reducing the impact on internet bandwidth for internal users.",
                focus: "Hybrid Connectivity (Direct Connect)",
                focusExplanation: "Direct Connect is the AWS solution for dedicated, reliable, and high-throughput connectivity between on-premises and AWS."
            },
            {
                id: 272,
                text: "A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
                options: [
                    "Enable versioning on the S3 bucket.",
                    "Enable MFA Delete on the S3 bucket.",
                    "Create a bucket policy on the S3 bucket.",
                    "Enable default encryption on the S3 bucket.",
                    "Create a lifecycle policy for the objects in the S3 bucket."
                ],
                correct: [0, 1],
                explanation: "Enabling versioning allows recovery of deleted objects, and MFA Delete adds an extra layer of protection against accidental or malicious deletions.",
                focus: "S3 Data Protection (Versioning & MFA Delete)",
                focusExplanation: "Versioning and MFA Delete are the primary AWS features for protecting S3 data from accidental or unauthorized deletion."
            },
            {
                id: 273,
                text: "A company has a data ingestion workflow that consists of the following: • An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries • An AWS Lambda function to process the data and record metadata. The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job. Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)",
                options: [
                    "Deploy the Lambda function in multiple Availability Zones.",
                    "Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.",
                    "Increase the CPU and memory that are allocated to the Lambda function.",
                    "Increase provisioned throughput for the Lambda function.",
                    "Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue."
                ],
                correct: [1, 4],
                explanation: "Subscribing an SQS queue to the SNS topic provides durable message storage, and having Lambda poll the SQS queue ensures all messages are processed, even if there are temporary failures.",
                focus: "Reliable Event Processing (SNS + SQS + Lambda)",
                focusExplanation: "Using SQS as a buffer between SNS and Lambda ensures reliable, at-least-once delivery and processing of all events."
            },
            {
                id: 274,
                text: "A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size. Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation. What should a solutions architect do to meet these requirements with the LEAST development effort?",
                options: [
                    "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.",
                    "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.",
                    "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.",
                    "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII."
                ],
                correct: [1],
                explanation: "Amazon Macie automatically scans S3 for PII and can trigger SNS notifications for alerting and remediation with minimal development effort.",
                focus: "Automated PII Detection (Macie + SNS)",
                focusExplanation: "Amazon Macie is the AWS service for automated PII detection in S3, and SNS provides alerting and workflow integration."
            },
            {
                id: 275,
                text: "A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week. What should the company do to guarantee the EC2 capacity?",
                options: [
                    "Purchase Reserved Instances that specify the Region needed.",
                    "Create an On-Demand Capacity Reservation that specifies the Region needed.",
                    "Purchase Reserved Instances that specify the Region and three Availability Zones needed.",
                    "Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed."
                ],
                correct: [3],
                explanation: "On-Demand Capacity Reservations allow you to reserve capacity in specific Availability Zones, guaranteeing EC2 availability for the event.",
                focus: "EC2 Capacity Reservation",
                focusExplanation: "On-Demand Capacity Reservations are the AWS solution for guaranteed EC2 capacity in specific AZs for a defined period."
            },
            {
                id: 276,
                text: "A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location. What should a solutions architect do to meet these requirements?",
                options: [
                    "Move the catalog to Amazon ElastiCache for Redis.",
                    "Deploy a larger EC2 instance with a larger instance store.",
                    "Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.",
                    "Move the catalog to an Amazon Elastic File System (Amazon EFS) file system."
                ],
                correct: [0],
                explanation: "ElastiCache for Redis provides high availability and durability for frequently accessed catalog data, with built-in replication and persistence.",
                focus: "Highly Available In-Memory Storage (ElastiCache)",
                focusExplanation: "ElastiCache for Redis is a managed, highly available, and durable in-memory data store for fast, reliable access."
            },
            {
                id: 277,
                text: "A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable. Which solution will meet these requirements MOST cost-effectively?",
                options: [
                    "Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.",
                    "Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.",
                    "Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.",
                    "Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive."
                ],
                correct: [1],
                explanation: "S3 Intelligent-Tiering provides fast access for recent files, and S3 Glacier Flexible Retrieval is cost-effective for older, infrequently accessed files.",
                focus: "S3 Lifecycle & Query Optimization",
                focusExplanation: "Combining S3 Intelligent-Tiering, lifecycle policies, and Athena/Glacier Select enables cost-effective, queryable storage."
            },
            {
                id: 278,
                text: "A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?",
                options: [
                    "Create an AWS Lambda function to apply the patch to all EC2 instances.",
                    "Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.",
                    "Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.",
                    "Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances."
                ],
                correct: [3],
                explanation: "Systems Manager Run Command allows you to run custom scripts or commands across a fleet of EC2 instances quickly and securely.",
                focus: "Fleet Management (SSM Run Command)",
                focusExplanation: "SSM Run Command is the AWS tool for running commands at scale across EC2 instances, including third-party patching."
            },
            {
                id: 279,
                text: "A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
                options: [
                    "Configure the application to send the data to Amazon Kinesis Data Firehose.",
                    "Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.",
                    "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.",
                    "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.",
                    "Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email."
                ],
                correct: [3, 4],
                explanation: "EventBridge can schedule Lambda to query the API and generate the report, and S3 + SNS can be used to distribute the report by email.",
                focus: "Automated Reporting (EventBridge + Lambda + S3 + SNS)",
                focusExplanation: "Combining EventBridge, Lambda, S3, and SNS enables automated, scheduled, and scalable reporting workflows."
            },
            {
                id: 280,
                text: "A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically, is highly available, and requires minimum operational overhead. Which solution will meet these requirements?",
                options: [
                    "Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.",
                    "Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.",
                    "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage.",
                    "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage."
                ],
                correct: [2],
                explanation: "Amazon EFS provides a scalable, highly available, and managed file system for EC2, ideal for large, variable-size files.",
                focus: "Scalable File Storage (EFS)",
                focusExplanation: "Amazon EFS is the AWS solution for scalable, highly available, and managed file system storage."
            },
            {
                id: 281,
                text: "A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency. Which solution will meet these requirements?",
                options: [
                    "Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.",
                    "Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.",
                    "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years.",
                    "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years."
                ],
                correct: [2],
                explanation: "S3 Object Lock in compliance mode ensures records cannot be deleted, and lifecycle policies automate archival for long-term retention.",
                focus: "Data Retention & Compliance (S3 Object Lock)",
                focusExplanation: "S3 Object Lock in compliance mode is the AWS solution for regulatory data retention and deletion prevention."
            },
            {
                id: 282,
                text: "A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files. What should a solutions architect do to meet these requirements?",
                options: [
                    "Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.",
                    "Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.",
                    "Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server.",
                    "Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS."
                ],
                correct: [2],
                explanation: "FSx for Windows File Server provides a fully managed, highly available, and durable SMB file share solution compatible with Windows environments.",
                focus: "Highly Available Windows File Shares (FSx)",
                focusExplanation: "FSx for Windows File Server is the AWS solution for managed, highly available, and durable Windows file shares."
            },
            {
                id: 283,
                text: "A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases. Which solution will meet these requirements?",
                options: [
                    "Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.",
                    "Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.",
                    "Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances.",
                    "Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets."
                ],
                correct: [2],
                explanation: "Security groups can be used to allow only private subnet EC2 instances to access the RDS databases, enforcing network isolation.",
                focus: "Network Access Control (Security Groups)",
                focusExplanation: "Security groups are the primary AWS tool for controlling access between resources in different subnets."
            },
            {
                id: 284,
                text: "A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS. Which solution will meet these requirements?",
                options: [
                    "Create stage variables in API Gateway with Name=\"Endpoint-URL\" and Value=\"Company Domain Name\" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM).",
                    "Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.",
                    "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.",
                    "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name."
                ],
                correct: [3],
                explanation: "For custom domain names with API Gateway, the certificate must be in us-east-1 for edge-optimized endpoints, and Route 53 can route traffic to the custom domain.",
                focus: "API Gateway Custom Domain (ACM + Route 53)",
                focusExplanation: "Custom domains for API Gateway require ACM certificates and DNS configuration for secure, branded endpoints."
            },
            {
                id: 285,
                text: "A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort. What should a solutions architect do to meet these requirements?",
                options: [
                    "Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.",
                    "Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.",
                    "Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.",
                    "Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions."
                ],
                correct: [1],
                explanation: "Amazon Rekognition provides built-in inappropriate content detection for images, minimizing development effort.",
                focus: "Automated Content Moderation (Rekognition)",
                focusExplanation: "Amazon Rekognition is the AWS service for automated image and video content moderation."
            },
            {
                id: 286,
                text: "A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload. What should a solutions architect do to meet these requirements?",
                options: [
                    "Use Amazon EC2 instances, and install Docker on the instances.",
                    "Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.",
                    "Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.",
                    "Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI)."
                ],
                correct: [2],
                explanation: "ECS on Fargate is a serverless container platform that abstracts away infrastructure management, allowing focus on application maintenance.",
                focus: "Serverless Containers (ECS Fargate)",
                focusExplanation: "ECS on Fargate is the AWS solution for running containers without managing servers or clusters."
            },
            {
                id: 287,
                text: "A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day. What should a solutions architect do to transmit and process the clickstream data?",
                options: [
                    "Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.",
                    "Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.",
                    "Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket, run an AWS Lambda function to process the data for analysis.",
                    "Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis."
                ],
                correct: [3],
                explanation: "Kinesis Data Streams and Firehose provide scalable, managed ingestion and delivery to S3, and Redshift is ideal for large-scale analytics.",
                focus: "Big Data Ingestion & Analytics (Kinesis + Redshift)",
                focusExplanation: "Kinesis and Redshift are the AWS services for scalable, real-time data ingestion and analytics."
            },
            {
                id: 288,
                text: "A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS. What should a solutions architect do to meet this requirement?",
                options: [
                    "Update the ALB's network ACL to accept only HTTPS traffic.",
                    "Create a rule that replaces the HTTP in the URL with HTTPS.",
                    "Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.",
                    "Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI)."
                ],
                correct: [2],
                explanation: "A listener rule on the ALB can redirect all HTTP requests to HTTPS, ensuring secure access for all users.",
                focus: "HTTPS Enforcement (ALB Listener Rule)",
                focusExplanation: "ALB listener rules are the AWS-recommended way to enforce HTTPS and redirect HTTP traffic."
            },{
                id: 290,
                text: "A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.",
                    "Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.",
                    "Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.",
                    "Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters."
                ],
                correct: [2],
                explanation: "AWS Secrets Manager provides secure storage, automatic rotation, and easy access to secrets for applications, minimizing operational overhead.",
                focus: "Credential Management & Rotation (Secrets Manager)",
                focusExplanation: "Secrets Manager is the AWS service for secure, automated credential storage and rotation, with native integration for EC2 and RDS."
            },
            {
                id: 291,
                text: "A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires. What should a solutions architect do to meet these requirements?",
                options: [
                    "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
                    "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
                    "Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
                    "Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually."
                ],
                correct: [3],
                explanation: "Imported certificates from external CAs must be rotated manually. EventBridge can notify when expiration is near.",
                focus: "SSL/TLS Certificate Management (ACM)",
                focusExplanation: "ACM supports managed renewal for ACM-issued certs, but imported certs require manual rotation; EventBridge can notify on expiration."
            },
            {
                id: 292,
                text: "A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time. Which solution meets these requirements MOST cost-effectively?",
                options: [
                    "Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3.",
                    "Save the .pdf files to Amazon DynamoDB. Use the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB.",
                    "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.",
                    "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store."
                ],
                correct: [0],
                explanation: "S3 and Lambda provide a serverless, scalable, and cost-effective solution for file storage and processing.",
                focus: "Serverless File Processing (S3 + Lambda)",
                focusExplanation: "S3 event triggers and Lambda are ideal for scalable, event-driven file processing and storage."
            },
            {
                id: 293,
                text: "A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day. The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS. What should a solutions architect do to meet these requirements?",
                options: [
                    "Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.",
                    "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.",
                    "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway, depending on each workload's location.",
                    "Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway."
                ],
                correct: [3],
                explanation: "FSx File Gateway provides low-latency access to FSx for Windows File Server from on-premises, minimizing changes and operational overhead.",
                focus: "Hybrid File Storage (FSx File Gateway)",
                focusExplanation: "FSx File Gateway enables seamless, low-latency access to managed Windows file shares from both AWS and on-premises."
            },
            {
                id: 294,
                text: "A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports. Which solution will meet these requirements with the LEAST operational overhead?",
                options: [
                    "Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.",
                    "Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.",
                    "Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.",
                    "Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text."
                ],
                correct: [2],
                explanation: "Textract extracts text from documents, and Comprehend Medical can identify PHI entities with minimal code and operational overhead.",
                focus: "PHI Detection (Textract + Comprehend Medical)",
                focusExplanation: "Textract and Comprehend Medical are AWS managed services for extracting and analyzing medical text for PHI."
            },
            {
                id: 295,
                text: "A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days. Which storage solution is MOST cost-effective?",
                options: [
                    "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.",
                    "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.",
                    "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.",
                    "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation."
                ],
                correct: [2],
                explanation: "S3 Standard-IA is cost-effective for infrequently accessed data that must remain immediately accessible, and lifecycle policies automate management.",
                focus: "S3 Lifecycle Cost Optimization",
                focusExplanation: "S3 Standard-IA is ideal for infrequently accessed, but still immediately available, data after the first 30 days."
            },
            {
                id: 296,
                text: "A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages. What should a solutions architect do to ensure messages are being processed once only?",
                options: [
                    "Use the CreateQueue API call to create a new queue.",
                    "Use the AddPermission API call to add appropriate permissions.",
                    "Use the ReceiveMessage API call to set an appropriate wait time.",
                    "Use the ChangeMessageVisibility API call to increase the visibility timeout."
                ],
                correct: [3],
                explanation: "Increasing the visibility timeout ensures that messages are not processed more than once before being deleted, preventing duplicates.",
                focus: "SQS Message Processing Semantics",
                focusExplanation: "Visibility timeout prevents multiple consumers from processing the same message simultaneously."
            },
            {
                id: 297,
                text: "A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails. What should the solutions architect do to meet these requirements?",
                options: [
                    "Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.",
                    "Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.",
                    "Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.",
                    "Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails."
                ],
                correct: [0],
                explanation: "Direct Connect provides low-latency, highly available connectivity, and a VPN backup provides failover at lower cost.",
                focus: "Hybrid Connectivity (Direct Connect + VPN)",
                focusExplanation: "Combining Direct Connect with VPN backup is the AWS best practice for highly available, cost-effective hybrid architectures."
            },
            {
                id: 298,
                text: "A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data. Which solution will meet these requirements with the LEAST operational effort?",
                options: [
                    "Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.",
                    "Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.",
                    "Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.",
                    "Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database."
                ],
                correct: [1],
                explanation: "Multi-AZ deployments for both EC2 and Aurora provide high availability and minimal downtime with managed failover.",
                focus: "High Availability (Multi-AZ + RDS Proxy)",
                focusExplanation: "Multi-AZ and RDS Proxy are AWS best practices for high availability and minimal downtime for critical applications."
            },
            {
                id: 299,
                text: "A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service. The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code. What should a solutions architect do to meet these requirements?",
                options: [
                    "Enable HTTP health checks on the NLB, supplying the URL of the company's application.",
                    "Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected, the application will restart.",
                    "Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.",
                    "Create an Amazon CloudWatch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state."
                ],
                correct: [2],
                explanation: "ALB supports HTTP health checks and can trigger Auto Scaling to replace unhealthy instances, improving availability without custom code.",
                focus: "Application Health & Auto Scaling (ALB)",
                focusExplanation: "ALB with HTTP health checks and Auto Scaling is the AWS solution for automated recovery from application errors."
            },
            {
                id: 300,
                text: "A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour. What should the solutions architect recommend to meet these requirements?",
                options: [
                    "Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.",
                    "Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.",
                    "Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB.",
                    "Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot."
                ],
                correct: [1],
                explanation: "DynamoDB point-in-time recovery allows restoration to any point within the last 35 days, meeting the RPO and RTO requirements.",
                focus: "DynamoDB Backup & Recovery (PITR)",
                focusExplanation: "Point-in-time recovery is the AWS solution for fine-grained, low-RPO/RTO DynamoDB backup and restore."
            },
            {
                id: 301,
                text: "A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs. How can the solutions architect meet this requirement?",
                options: [
                    "Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.",
                    "Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets.",
                    "Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets.",
                    "Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets."
                ],
                correct: [3],
                explanation: "A gateway VPC endpoint for S3 allows private, cost-free data transfer between EC2 and S3 within the same region.",
                focus: "S3 Cost Optimization (VPC Endpoint)",
                focusExplanation: "Gateway VPC endpoints eliminate regional data transfer charges for S3 access from within a VPC."
            }
]; 