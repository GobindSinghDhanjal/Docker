import React from "react";

function Content() {
    return (
        <div className="content"> 
            <h1>Docker overview</h1>
            <small>Estimated reading time: 8 minutes</small>
            <p>Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.</p>

            <h2>The Docker platform</h2>
            <p>Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allows you to run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. You can easily share containers while you work, and be sure that everyone you share with gets the same container that works in the same way.

            Docker provides tooling and a platform to manage the lifecycle of your containers:
            <ul>
                <li>Your developers write code locally and share their work with their colleagues using Docker containers.</li>
                <li>They use Docker to push their applications into a test environment and execute automated and manual tests.</li>
                <li>When developers find bugs, they can fix them in the development environment and redeploy them to the test environment for testing and validation.</li>
                <li>When testing is complete, getting the fix to the customer is as simple as pushing the updated image to the production environment.</li>
            </ul>
           </p>

           <h3>Responsive deployment and scaling</h3>
           <p>Docker’s container-based platform allows for highly portable workloads. Docker containers can run on a developer’s local laptop, on physical or virtual machines in a data center, on cloud providers, or in a mixture of environments.

Docker’s portability and lightweight nature also make it easy to dynamically manage workloads, scaling up or tearing down applications and services as business needs dictate, in near real time.</p>
                
            <h3>Running more workloads on the same hardware</h3>     
            <p>Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines, so you can use more of your compute capacity to achieve your business goals. Docker is perfect for high density environments and for small and medium deployments where you need to do more with fewer resources.</p>   
        </div>
    );
}

export default Content;