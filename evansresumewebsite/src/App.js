import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>   
    <header>
        <div id="navbar">
          <div id="navbar-content">
            <h1>Evans Resume Site</h1>
            <a href="Screens/contact.html">Contact Me</a>
            <a href="index.html">About</a>
          </div>
          <hr/>
        </div>
    </header>
    <div class="clearfix"></div>
    <main>
      <div id="content">
        <div class="container">
          <div class="card">
            <div id="name">
              <h1 style={{fontSize:50}}>Evan Johnson</h1>
              <hr style={{color:black, marginTop: 0, marginBottom:100}}/>
            </div>
            <div id="projects">
              <h2>Projects</h2>
              <h3>Deadwood</h3>
              <p>Wrote and maintained over 2000 lines of Java code to implement a GUI and text-based version of the board game Deadwood.</p>
              <h3>Python Video Generator</h3>
              <p>It uses Reddit's API and various python libraries to generate a video from a post from a specified URL.</p>
              <h3>This Website</h3>
              <p>I built this website from scratch using HTML, CSS styling and GitHubs web hosting services.</p>
              <h3>Work Order System</h3>
              <P>Used Knex, Node.js, PostgreSQL and JavaScript to build onto an existing system for a contracting company. Conducted weekly stand-ups with a team of 3.</P>
            </div>
            <div id="skills">
              <h2>Skills</h2>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>React-Native</li>
                <li>ChatGPT</li>
                <li>C</li>
                <li>C#</li>
                <li>Python</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
                <li>Minor Soldering</li>
                <li>Network Cabling</li>

              </ul>
            </div>
            <div id="education">
              <h2>Education</h2>
                <h3>Western Washington University - Bachelors of Science in Computer Science</h3>
                <h4>September 2020 - June 2023</h4>
                <p>Graduating in June 2023 with a Bachelors in Computer Science and a Minor in Mathematics</p>
              <br/>
                <h3>Grays Harbor College - Associates of Sience</h3>
                <h4>September 2018 - June 2020</h4>
                <p>Enrolled as a Running Start student with focus on Mathematics and Physics.</p>
              
            </div>
            <div id="classes">
              <h2>Classes Taken</h2>
              <h3>Database Systems</h3>
              <h3>Data Structures</h3>
              <h3>Computer Mediated Communications</h3>
              <h3>Object Oriented Design</h3>
              <h3>Computer and Operating Systems</h3>
              <h3>Analysis of Algorithms</h3>
              <h3>Networking</h3>
              <h3>Game Programming</h3>
              <h3>Secure Software Development</h3>
              <h3>Formal Language and Functional Programming</h3>
              <h3>Linear and Nonlinear Optimization</h3>
              <h3>Computer Networking</h3>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="card2">
            <div class="contact-info">
              <h4 style={{marginLeft:0}}>Contact Information</h4>
              <h5>20 Jones rd
                Kelso, WA 98626
                (503) 539-4324
                jevan2001@gmail.com
              </h5>
            </div>
            <div id="exp">
              <h2>Experience</h2>
              <h3>Seaquest Designs, LLC,</h3>
              <h4>Ocean Shores — Assistant Contractor</h4>
              <h5>June 2015 - PRESENT (During Summers)</h5>
              <p style={{paddingBottom:5}}>I have completed various tasks such as painting, siding, 
                demolition, minor electrical and plumbing, and dry rot repair.</p>
              <h3>Western Washington University,</h3>
              <h4>Bellingham — Resident Advisor</h4>
              <h5>December 2021 - March 2022</h5>
              <p>I fostered the development of relationships among 50 residents.
                 Served as an on-call incident reporter and provided conflict resolution.</p>
            </div>
            <div id="vol">
              <h2>Volunteer Work</h2>
              <h3>Grays Harbor Search and Rescue</h3>
              <h4>Dog training</h4>
              <p>Helped teach dogs manners and posed as a lost 
                subject for them to find.</p>
              <h3>North Beach Track and Field</h3>
              <h4>Event Running</h4>
              <p>Worked with a team of over 20 to coordinate events, assure continuity, and create a positive team environment.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="root"></div>
      </main>
      </body>
  );
}

export default App;
