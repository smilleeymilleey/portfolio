import React from 'react'
import "./Home.css";

export default function Home() {
    return (
       
        <body>

        <head>
        <title>Portfolio Page</title>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'/>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'/>
        <link rel="stylesheet" href="css/style.css"/>
    
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    
      </head>
      
    
        <!-- Start Navigation Bar -->
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <span class="navbar-brand">Caitlyn Miley</span>
            </div>
    
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#home">Home <span class="sr-only">(current)</span></a></li>
              </ul>
    
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#about-link">About</a></li>
                <li><a href="#portfolio-link">Portfolio</a></li>
                <li><a href="#blog-link">Blog</a></li>
                <li><a href="#contact-link">Contact</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
        <!-- End Navagation Bar -->
    
        <!-- Start Splash Section  -->
        <a class="anchor" id="home"></a>
        <div id="splash" class="container-fluid">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1>Caitlyn Miley</h1>
              <hr />
              <p>
                Web Developer 
              </p>
              <p>
                <a href="https://github.com/smilleeymilleey" id="github" target="_blank"><i class="fa fa-github-square fa-2x"></i></a>
                <a href="https://uk.linkedin.com/in/caitlyn-miley1" id="linkedin" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a>
                <a href="https://twitter.com/smilleymilleey" id="twitter"target="_blank"><i class="fa fa-twitter-square fa-2x"></i></a>
              </p>
            </div>
          </div>
        </div>
        <!-- End Splash Section  -->
        <a class="anchor" id="about-link"></a>
        <div id="about" class="container-fluid text-center">
              <h1 class="portfolio">About</h1>
              <hr />
              <div class="container">
                <div class="row row-eq-height">
                  <!-- <div class="col-lg-1"></div> -->
                  <div class="col-lg-3">
                
                  </div>
                  <div id="white-bg" class="about">
                    <p class="aboutDescription">
                       Bachelors of Science & Engineering. Full Stack Developer Certification from Southern Methodist University. Capabilities include Javascript, React, MySQL, MongoDB, JQuery, Bootstrap, API Integration, JSON, AJAX, HTML, CSS, Github.
                      
                      
                    </p>
                  </div>
                </div>
              </div>
        </div>
        <!-- Start portfolio Section  -->
        <a class="anchor" id="portfolio-link"></a>
        <div id="portfolio" class="container-fluid2">
          <div class="row">
            <div class="container-fluid3">
              <h1 class="portfolio">Portfolio</h1>
              <hr />
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="thumbnail">
                      <a href="https://twitter-clone-1ef21.web.app" target="_blank">
                        <div class="thumbnail-hover text-center">
                          <i class="fa fa-eye fa-4x"></i>
                        </div>
                        <img class="img-responsive" src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png" alt="twitter-clone">
                      </a>
                      <div class="caption">
                        <h3>Twitter Clone</h3>
                        <p>Javascript, React, HTML, CSS, Firebase</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="thumbnail">
                      <a href="https://e-commerce-34a07.web.app/" target="_blank">
                        <div class="thumbnail-hover text-center">
                          <i class="fa fa-eye fa-4x"></i>
                        </div>
                        <img class="img-responsive" src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png">
                      </a>
                      <div class="caption">
                        <h3>Amazon Clone</h3>
                        <p>Javascript, React, Firebase, Context API, HTML, CSS</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="thumbnail">
                      <a href="#" target="_blank">
                        <div class="thumbnail-hover text-center">
                          <i class="fa fa-eye fa-4x"></i>
                        </div>
                        <img src="https://images.unsplash.com/photo-1426260193283-c4daed7c2024?crop=entropy&dpr=2&fit=crop&fm=jpg&h=250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=400">
                      </a>
                      <div class="caption">
                        <h3>Placeholder</h3>
                        <p>Placeholder project desciption goes here</p>
                      </div>
                    </div>
                  </div>
                </div>
              
                      
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End portfolio Section  -->
        
        <!-- Blog Section -->
        <a class="anchor" id="blog-link"></a>
        <div id="blog" class="container-fluid2">
          <div class="row">
            <div class="container-fluid3">
              <h1 class="blog">Blog</h1>
              <hr />
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="thumbnail">
                      <a href="https://caitlynmiley-cm.medium.com/freecodecamps-quincy-larson-inspired-me-to-change-my-life-fe6464bb4b03" target="_blank">
                        <div class="thumbnail-hover text-center">
                          <i class="fa fa-eye fa-4x"></i>
                        </div>
                        <img class="img-responsive" src="" alt=""
                      a/>
                      <div class="caption">
                        <h3>Intervieing Quincy Larson</h3>
                        <p>Founder of FreeCodeCamp discusses brand intrgrity, accessibility to tech, programming, and more</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="thumbnail">
                      <a href="https://caitlynmiley-cm.medium.com/positive-productivity-on-a-slow-day-d958d443a3c9" target=_blank>
                        <div class="thumbnail-hover text-center">
                          <i class="fa fa-eye fa-4x"></i>
                        </div>
                        <img class="img-responsive" src="">
                      </a>
                      <div class="caption">
                        <h3>How to STAY Productive</h3>
                        <p>Read about how positivity fuels productivity</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="thumbnail">
                      <a href="#" target="_blank">
                        <div class="thumbnail-hover text-center">
                          <i class="fa fa-eye fa-4x"></i>
                        </div>
                        <img src="">
                      </a>
                      <div class="caption">
                        <h3>Placeholder</h3>
                        <p>Placeholder project desciption goes here</p>
                      </div>
                    </div>
                  </div>
                </div>
              
                      
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Start Contact Section -->
        <a class="anchor" id="contact-link"></a>
        <div id="contact" class="container-fluid text-center">
          <h1>Contact</h1>
          <hr />
          <div class="container">
            <div class="contactRow">
              <div class="col-lg-100">
                
                <a href="https://twitter.com/smilleymilleey">
                  <span class="fa-stack fa-3x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="https://linkedin.com/in/caitlyn-miley1">
                  <span class="fa-stack fa-3x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="https://github.com/smilleeymilleey">
                  <span class="fa-stack fa-3x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github-alt fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
                <a href="https://www.freecodecamp.com/smilleeymilleey">
                  <span class="fa-stack fa-3x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-fire fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
    
                <a href="mailto:cmiley@protonmail.com">
                    <span class="fa-stack fa-3x">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
              </div>
           
             
                </a>
              </div>
            </div>
          </div>
        </div>
        </body> 
        <!-- End Contact Section -->
    
              
    
    




    )
}

