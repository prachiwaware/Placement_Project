import React from 'react';

function Companies() {
  return (
      <div>
          <header class="nav-down responsive-nav hidden-lg hidden-md">
            <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div id="main-nav" class="collapse navbar-collapse">
                <nav>
                    <ul class="nav navbar-nav">
					
                        <li><a href="#top">Top Companies</a></li>
                        <li><a href="#featured">Interview Process</a></li>
                        <li><a href="#projects">Our Recruiters</a></li>
                        <li><a href="#blog">Alumni Connection</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <div class="sidebar-navigation hidde-sm hidden-xs">
            <div class="logo">
                <a href="#">Walchand Cam<em>pus</em></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#top">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Top Companies
                        </a>
                    </li>
                    <li>
                        <a href="#featured">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Interview Process
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Our Recruters
                        </a>
                    </li>
                    <li>
                        <a href="#blog">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Alumni Connection
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="slider">
            <div class="Modern-Slider content-section" id="top">
                <div class="item item-1">
                    <div class="img-fill">
                    <div class="image"></div>
                    <div class="info">
                        <div>
                          <h1>Our Top Recruters for Computer Science department</h1> </br>
                          <p>From past 75 years we have reached out
                              more than 100 Companies and growing more..
                          </p>
                          <div class="white-button button">
                              <a href="http://www.walchandsangli.ac.in/" target="_blank">Discover More</a>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="item item-2">
                    <div class="img-fill">
                        <div class="image"></div>
                        <div class="info">
                        <div>
                          <h1>Know your<br/>dream campus</h1>
                          <p>The big Multinational Companies are now being a part of our On-Campus
							That's the aim for our students..</p>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-content">
            <section id="featured" class="content-section">
                <div class="section-heading">
                    <h1>Top<br><em>Companies</em></h1>
                    <p>The Top IT industries come here with exclusive opportunities, 
                    <br>just for freshers and enhances the skills of beginers.</p>
                </div>
                <div class="section-content">
                    <div class="owl-carousel owl-theme">
                        {/* <!--Veritas--> */}
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_1.png" alt="" width="300" height="200"/>
                                <div class="featured-button button">
                                    <a href="https://www.veritas.com/" target="_blank">Continue Reading</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>Veritas</h4>
                                <span>Average Salary: 9-12 LPA</span>
                                <p>The selection process included aptitude tests, 2 tech interviews, and an HR interview. 
                                    The aptitude test is mostly on hackerrank. 
                                    It has 20 MCQs based on cs concepts, basic math and 2 coding questions.</p>
                            </div>
                        </div>
                        {/* <!--Druva--> */}
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_2.png" alt="" width="300" height="200">
                                <div class="featured-button button">
                                    <a href="https://www.druva.com/" target="_blank">Continue Reading</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>Druva</h4>
                                <span>Average Salary: 11-14 LPA</span>
                                <p> The selection process included aptitude tests, 2 to 3 tech interviews, and an HR interview. 
                                    The aptitude test is mostly on mettl platform.
                                    This was an Online test for 90 min this round contains 5 sections. 
                                    5 Operating System concepts questions.
                                    5 Networking concepts questions.
                                    5 Database concepts questions.
                                    5 Output C based questions.
                                    3 Coding questions.</p>
                            </div>
                        </div>
                        {/* <!--Pubmatic--> */}
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_3.png" alt="" width="300" height="200"/>
                                <div class="featured-button button">
                                    <a href="https://pubmatic.com/" target="_blank">Continue Reading</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>Pubmatic</h4>
                                <span>Average Salary: 9.5-14 LPA</span>
                                <p>The selection process included aptitude tests which is mostly on hackerrank,
                                    3 to 4 tech interviews, including an HR interview.
                                    Aptitude test is having 20 MCQ on core subjects and 2 Coding questions.  
                                    Based on choosen language C or Java there would be one technical interview</p>
                            </div>
                        </div>
                        <!--Siemens-->
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_4.jpg" alt="" width="300" height="200">
                                <div class="featured-button button">
                                    <a href="https://www.siemens.com/global/en.html" target="_blank">Continue Reading</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>Siemens</h4>
                                <span>Average Salary: 9-15 LPA</span>
                                <p>The selection process included aptitude tests, 2 tech interviews, and an HR interview. 
                                    The aptitude test is having MCQ type.
                                    and the intervies are focused on cs fundamentals.
                                </p>
                            </div>
                        </div>
                        <!--Expressif-->
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_5.png" alt="" width="300" height="200">
                                <div class="featured-button button">
                                    <a href="https://www.espressif.com/" target="_blank">Continue Reading</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>Expressif</h4>
                                <span>Average Salary: 13-17 LPA</span>
                                <p>The selection process included aptitude tests, 2 to 3 tech interviews, and an HR interview. 
                                    The aptitude test includes MCQ and coding questions.
                                    The interview covers problem solving and project discussion.
                                </p>
                            </div>
                        </div>
                        <!--Sahaj-->
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_6.jpg" alt="" width="300" height="200">
                                <div class="featured-button button">
                                    <a href="https://sahaj.ai/" target="_blank">Continue Reading</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>Sahaj Software</h4>
                                <span>Average Salary: 10-12 LPA</span>
                                <p>The selection process includes 1 aptitude test with basic MCQ.
                                    Then it has one coding round which includes 1 to 2 codes with medium difficulties.
                                    2 technical rounds and 1 HR intervies.
                                </p>
                            </div>
                        </div>
                        <!--ThoughtWorks-->
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_7.png" alt="" width="300" height="200">
                                <div class="featured-button button">
                                    <a href="https://www.thoughtworks.com/" target="_blank">Continue Reading</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>ThoughtWorks</h4>
                                <span>Average Salary:8-8.5 LPA</span>
                                <p>The selection process is kind different.
                                   The aptitude test includes MCQ and 3 coding question.
                                   The selected students have second round as a pair coding round where one need to
                                   play pair coding with OOPs concepts with employee from ThoughtWorks.
                                   Then 2 to 3 technical rounds followed by HR round.
                                </p>
                            </div>
                        </div>
                        <!--MindBody-->
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_8.png" alt="" width="300" height="200">
                                <div class="featured-button button">
                                    <a href="https://company.mindbodyonline.com/" target="_blank">Continue Reading</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>MindBody</h4>
                                <span>Average Salary:8-8.5 LPA</span>
                                <p>The selection process includes aptitude followed by 1 technical 
                                    and 1 HR and Managerial round (Telephonic HR round).
                                    The aptitude is mostly on Logical and general aptitude 
                                    with personal behavioural questions </p> 
                            </div>
                        </div>
                        <!--NICE-->
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_9.png" alt="" width="300" height="200">
                                <div class="featured-button button">
                                    <a href="https://www.nicesoftwaresolutions.com/" target="_blank">Continue Reading</a>
                                </div>
                            </div>
                            <div class="text-content">
                                <h4>NICE</h4>
                                <span>Average Salary: 7-8 LPA</span>
                                <p>The selection process includes aptitude followed by 1 technical 
                                    and 1 HR and Managerial round.
                                    The aptitude is mostly on hackerrank and having MCQ and 2 Coding questions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" class="content-section">
                <div class="section-heading">
                    <h1>Recent<br><em>Companies</em></h1>
                    <p>Every Year the below Companies visit for campus recruitment.
                    <br>The Number of students are increasing per company every year....</p>
                </div>
                <div class="section-content">
                    <div class="masonry">
                        <div class="row">
                            <div class="item">
                                <div class="col-md-8">
                                    <a href="img/portfolio_big_1.jpg" data-lightbox="image"><img src="img/portfolio_1.jpg" alt="image 1"></a>
                                </div>
                            </div>
                            <div class="item second-item">
                                <div class="col-md-4">
                                    <a href="img/portfolio_big_2.jpg" data-lightbox="image"><img src="img/portfolio_2.jpg" alt="image 2"></a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-md-4">
                                    <a href="img/portfolio_big_3.jpg" data-lightbox="image"><img src="img/portfolio_3.jpg" alt="image 3"></a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="col-md-4">
                                    <a href="img/portfolio_big_4.jpg" data-lightbox="image"><img src="img/portfolio_4.jpg" alt="image 4"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </section>
            <section id="blog" class="content-section">
                <div class="section-heading">
                    <h1>Alumni<br><em>Connection</em></h1>
                    <p>The Recent placed students of our college in different Companies.
                    <br>The more reference from our Alumni .</p>
                </div>
                <div class="section-content">
                    <div class="tabs-content">
                        <div class="wrapper">
                            <ul class="tabs clearfix" data-tabgroup="first-tab-group">
                              <li><a href="#tab1" class="active">2020-2021 Alumni</a></li>
                            </ul>
                            <section id="first-tab-group" class="tabgroup">
                                <div id="tab1">
                                    <ul>
                                        <li>
                                            <div class="item">
                                                <img src="img/featured_1.png" alt="" width="300" height="200">
                                                <div class="text-content">
                                                    <h4>Associate Software Engineer</h4>
                                                    <span>2021 Pass-out Computer Science student</span>
                                                    <p>
                                                    <a href="https://www.linkedin.com/in/prathmesh-deshmukh-ba4b57194/" target="_blank">Prathmesh Deshmukh</a><br>
                                                    <a href="https://www.linkedin.com/in/manali-daigavane/" target="_blank"> Manali Daigavane</a><br>
                                                    <a href="https://www.linkedin.com/in/13mangesh/" target="_blank">Mangesh Puri</a>
                                                    </p>
                                                    <div class="accent-button button">
                                                        <a href="https://www.linkedin.com/company/veritas-technologies-llc/" target="_blank">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/featured_2.png" alt="" width="300" height="200">
                                                <div class="text-content">
                                                    <h4>Associate Software Engineer</h4>
                                                    <span>2021 Pass-out Computer Science student</span>
                                                    <p>
                                                        <a href="https://www.linkedin.com/in/rushikesh-korde-05a269152/" target="_blank">Rushikesh Korde</a><br>
                                                        <a href="https://www.linkedin.com/in/sohampatilsp/" target="_blank"> Soham Patil</a><br>
                                                        <a href="https://www.linkedin.com/in/panukulkarni7605/" target="_blank">Pranav Kulkarni</a>
                                                        </p>
                                                    <div class="accent-button button">
                                                        <a href="https://www.linkedin.com/company/druva/" target="_blank">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/featured_3.png" alt="" width="300" height="200">
                                                <div class="text-content">
                                                    <h4>Associate Software Engineer</h4>
                                                    <span>2021 Pass-out Computer Science student</span>
                                                    <p>
                                                        <a href="https://www.linkedin.com/in/saurabh-pande/" target="_blank">Saurabh Pande</a><br>
                                                        <a href="https://www.linkedin.com/in/saurabh077/" target="_blank"> Saurabh Zade </a><br>
                                                        <a href="https://www.linkedin.com/in/ashtnemi/" target="_blank">Atharv Adawadkar</a>
                                                        </p>
                                                    <div class="accent-button button">
                                                        <a href="https://www.linkedin.com/company/pubmatic/" target="_blank">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/featured_5.png" alt="" width="300" height="200">
                                                <div class="text-content">
                                                    <h4>Associate Software Engineer</h4>
                                                    <span>2021 Pass-out Computer Science student</span>
                                                    <p>
                                                        <a href="https://www.linkedin.com/in/sonalinpatil/" target="_blank">Sonali Patil</a><br>
                                                        <a href="https://www.linkedin.com/in/switi-mhaiske/" target="_blank"> Switi Mhaiske</a><br>
                                                        </p>
                                                    <div class="accent-button button">
                                                        <a href="https://www.linkedin.com/company/espressif-systems/" target="_blank">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/featured_6.jpg" alt="" width="300" height="200">
                                                <div class="text-content">
                                                    <h4>Associate Software Engineer</h4>
                                                    <span>2021 Pass-out Computer Science student</span>
                                                    <p>
                                                        <a href="https://www.linkedin.com/in/sanketpathak64/" target="_blank">Sanket Pathak</a><br>
                                                        <a href="https://www.linkedin.com/in/vinit-mahajan-117928134/" target="_blank"> Vinit Mahajan</a><br>
                                                        </p>
                                                    <div class="accent-button button">
                                                        <a href="https://www.linkedin.com/company/sahajsoftware/" target="_blank">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/featured_7.png" alt="" width="300" height="200">
                                                <div class="text-content">
                                                    <h4>Associate Software Engineer</h4>
                                                    <span>2020 Pass-out Computer Science student</span>
                                                    <p>
                                                        <a href="https://www.linkedin.com/in/kaivalya-mendki-504456152/" target="_blank">kaivalya Mendki</a><br>
                                                        <a href="https://www.linkedin.com/in/pranalisatalgaonkar1/" target="_blank"> pranali Satalgaonkar</a><br>
                                                        <a href="https://www.linkedin.com/in/shivam198/" target="_blank">Shivam Pande</a>
                                                        </p>
                                                    <div class="accent-button button">
                                                        <a href="https://www.linkedin.com/company/thoughtworks/" target="_blank">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/featured_8.png" alt="" width="300" height="200">
                                                <div class="text-content">
                                                    <h4>Associate Software Engineer</h4>
                                                    <span>2020 Pass-out Computer Science student</span>
                                                    <p>
                                                        <a href="https://www.linkedin.com/in/shivshakti-singh/" target="_blank">shivshakti Singh</a><br>
                                                        <a href="https://www.linkedin.com/in/aishwarya-kore/" target="_blank"> Aishvarya Kore</a><br>
                                                        <a href="https://www.linkedin.com/in/utkarsh-kendre/" target="_blank">Utkarsh Kendre</a>
                                                        </p>
                                                    <div class="accent-button button">
                                                        <a href="https://www.linkedin.com/company/mindbody/" target="_blank">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/featured_9.png" alt="" width="300" height="200">
                                                <div class="text-content">
                                                    <h4>Associate Software Engineer</h4>
                                                    <span>2020 Pass-out Computer Science student</span>
                                                    <p>
                                                        <a href="https://www.linkedin.com/in/vaishnavi-bharambe-b84262179/" target="_blank">Vaishnavi Bharambe</a><br>
                                                        <a href="https://www.linkedin.com/in/akhilpatil123/" target="_blank">Akhil Patil</a><br>
                                                        <a href="https://www.linkedin.com/in/sharvari-chougule-53628b170/" target="_blank">Sharvari Chaugule</a>
                                                        </p>
                                                    <div class="accent-button button">
                                                        <a href="https://www.linkedin.com/company/nice-systems/" target="_blank">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </section> 
                        </div>
                    </div>
                </div>
            </section>
            <section class="footer">
                <p></p>
            </section>
        </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script>
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();
        $(window).scroll(function(event){
            didScroll = true;
        });
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
        function hasScrolled() {
            var st = $(this).scrollTop();
            if(Math.abs(lastScrollTop - st) <= delta)
                return; 
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav-up').addClass('nav-down');
                }
            }
            lastScrollTop = st;
        }
    </script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>

      </div>
  )
}

export default Companies;
