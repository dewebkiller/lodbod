<?php 
    $filename = basename($_SERVER['PHP_SELF'], '.php');
    $body_class = ($filename === 'index') ? 'home' : $filename;
?>
<!DOCTYPE html>
<html>

<head>
    <title>Lodbod</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Lodbod">
    <meta name="keywords" content="Lodbod">
    <meta name="author" content="dewebkiller">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/layout.css" rel="stylesheet">
    <link href="css/responsive.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/hover.css" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
</head>

<body class="<?php echo $body_class; ?>">
    <header>
        <section class="btm-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-6">
                        <div class="logo"><img src="images/logo.png" alt="Lodbod"></div>
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-12 col-6 col-xs-12">
                        <div class="main-menu">
                            <nav class="navbar navbar-expand-md">
                                <button class="navbar-toggler d-block d-sm-block d-md-none"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mb-2 mb-lg-0">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Shippers </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Truckers </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Tracking </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">About Us </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Contact Us</a>
                                        </li>
                                        <li class="nav-item d-block d-sm-block d-md-none">
                                            <a class="nav-link" href="#">Login</a>
                                        </li>
                                        <li class="nav-item d-block d-sm-block d-md-none">
                                            <a class="nav-link" href="#">Get Started</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-6 d-none d-sm-block">
                        <div class="header-btn">
                            <ul class="list-unstyled d-flex gap-3 justify-content-end">
                                <li><a href="#" class="btn btn-border btn-border-black-40 border-radius-8">Login</a></li>
                                <li><a href="#" class="btn btn-bgcolor btn-bgcolor-primary border-radius-8 color-white">Get Started</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>