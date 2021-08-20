
const About =()=> {
      return (
        <div>
          <section id="title">
            <div className="container-fluid ">
              {/* Title */}
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="heading">I'm Purushotam</h1>
                  <h3>A programmer</h3>
                </div>
                <div className="col-lg-6">
                  <img className="title-img" src="https://i.ibb.co/wBrtrmR/Profile.jpg" alt="Profile" />
                </div>
              </div>
            </div>
          </section>
          {/* skills section */}
          <section id="skills">
            <h1 className="section-heading">Skills</h1>
            <div className="row">
              <div className="feature-box col-lg-4">
                <i className="fas ele fa-laptop-code fa-4x" />
                <h3>Competitive Coding</h3>
                <p className="f-text">Participated and won many intra college coding competitions.</p>
              </div>
              <div className="feature-box  col-lg-4">
                <i className="fas ele fa-layer-group fa-4x" />
                <h3>Data Structures and Algorithms</h3>
                <p className="f-text">Good grasp over data structures and algorithms.</p>
              </div>
              <div className="feature-box  col-lg-4">
                <i className="fas ele fa-spider fa-4x" />
                <h3>Web Desigining.</h3>
                <p className="f-text">Developed many web pages and familiar with various libraries.</p>
              </div>
            </div>
          </section>
          {/* Experience section */}
          <section id="Experience">
            <h2 className="section-heading">Experiences</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-xs-12 Experience-column">
                <div className="card text-center">
                  <div className="card-header">
                    <h3>Problem-Setting</h3>
                  </div>
                  <div className="card-body">
                    <img className="card-img" src="https://png.pngitem.com/pimgs/s/420-4200987_icon-1-circle-hd-png-download.png" alt="Problem-Setter" />
                    <p>Problem setter for various intra college coding competitions.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-xs-12 Experience-column">
                <div className="card text-center">
                  <div className="card-header">
                    <h3>Organizing</h3>
                  </div>
                  <div className="card-body">
                    <img className="card-img" src="https://png.pngitem.com/pimgs/s/1-12226_transparent-android-settings-icon-png-settings-icon-blue.png" alt="organizing-img" />
                    <p>Being the joint secretory of AIT coding cell organised various coding competitions.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-xs-12 Experience-column">
                <div className="card text-center">
                  <div className="card-header">
                    <h3>Teaching</h3>
                  </div>
                  <div className="card-body">
                    <img className="card-img" src="https://png.pngitem.com/pimgs/s/32-327526_transparent-teaching-icon-png-icon-png-download.png" alt="teaching-img" />
                    <p>Taught data structures and algorithms to juniors.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer id="footer">
            <a className="footer-link" href="https://www.linkedin.com/in/n-purushotam-kumar-73a51518b/">
              <i className="fab fa-linkedin fa-2x" /></a>
            <a className="footer-link" href="https://www.facebook.com/npurushotam.kumar.7/">
              <i className="fab fa-facebook-f fa-2x " />
            </a>
            <a className="footer-link" href="https://www.instagram.com/n_purushotam.kumar/">
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a className="footer-link" href="mailto:npurushotamkumar28@gmail.com">
              <i className="fas fa-envelope fa-2x " />
            </a>
            <p className="footer-para">Made with <i className="fas fa-heart" /> by N Purushotam Kumar</p>
          </footer>
        </div>
      )
  }

  export default About;