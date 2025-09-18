//import statements

function Projects() {
    return(
        <div>
            <div className="school-projects">
                <h1>School Projects</h1>


                <h2>Room Booking - SQL Group Database Project</h2>
                <p>
                Collaborated with four students to design a database using MySQL server. The database allowed students to reserve study 
                rooms on a university campus. Included additional features such as the ability to view when specific rooms most commonly
                get reserved.
                </p>


                <h2>European Destination Website - Full Stack Project</h2>
                <p>
                    Built a fully functioning website using MongoDB, React, NodeJS, and Express stack which allow users to view 
                    destinations in Europe, build their own lists of places they visited, and review other users’ public lists. 
                    The website was deployed to an EC2 server through AWS.
                </p>
                <a href="https://github.com/andrewdevito/SE3316-Lab-4" target="_blank" rel="noreferrer">Want to see? click here</a>


                <h2>Homeys - Group Mobile App Project</h2>
                <p>
                    Collaborated with three students to build a mobile app using a React Native, Typescript, express, and Postgres stack. 
                    The app helped students living together to easily communicate house responsibilities. 
                    Designed a shared list, inventory, personal profile, and rating system for the app.   
                </p>


                <h2>How Regional Crops are affected by Climate Change – Group Machine Learning Project</h2>
                <p>
                    Collaborated with a group of five students using sample data from Kaggle to create a machine learning model 
                    which predicts where certain crop types are more sustainable with climate change affecting yearly crop yield.
                </p>


                <h2>Peer to peer - Networking assignment</h2>
                <p>
                    Built a peer-to-peer kademlia network that allows a client to perform a basic search for an image. 
                    The system of server returns the image if it exists in the network.
                </p>
                <a href="https://github.com/andrewdevito/SE3314B---A3" target="_blank" rel="noreferrer">Want to see? click here</a>


                <h2>iFashionStore -Java Project</h2>
                <p>
                    Used a combination of JavaFX and SQL to create and add items to a user’s personal shopping cart.	
                </p>
                <a href="https://en.wikipedia.org/wiki/Trollface#/media/File:Trollface.png" target="_blank" rel="noreferrer">Want to see? click here - not available</a>
            </div>




            <div className="work-projects">
                <h1>Work Projects</h1>


                <h2>Advisor Payment Automation Script - Co-op 2023-2024</h2>
                <p>
                    Designed a database query using MySQL to gather specific information needed to pay companies advisors into a report. 
                    Developed a PowerShell script to automate the process of generating the report and sending it to a mainframe team.
                </p>


                <h2>eDeposit Testing and Deployment - Co-op 2023-2024</h2>
                <p>
                    Tested a new software package and implemented fix as necessary. Documented the installation and troubleshooting 
                    process on confluence. Deployed the software package to production servers.
                </p>
            </div>
        </div>
    );
}

export default Projects;