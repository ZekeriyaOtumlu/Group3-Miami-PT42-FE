# Group3-Miami-PT42-FE

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Bootstrap Project </title>
    <link rel="stylesheet" href="styles.css">
</head>


<!--Setting and Sign in button-->
<body>
    <div class="container-fluid">
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">MDDZ</a>
                <div>
                    <button class="btn btn-secondary btn-sm" type="button">
                        Sign in 
                    </button>
                    <button class="btn btn-secondary btn-sm" type="button">
                        Settings
                    </button>
                </div>
            </div>
        </nav>
    </div>

<!--MULTI TO SINGLE VIEW-->

    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                type="button" role="tab" aria-controls="pills-home" aria-selected="true">Browse</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Individual</button>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <p> Browse Mutiple Recipes </p>
            <div class="row align-items-start">
                <div class="col">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
                <div class="col">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
                <div class="col">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
            </div>
            <div class="row align-items-start">
                <div class="col">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
                <div class="col">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
                <div class="col">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
            </div>
            <div class="row align-items-start">
                <div class="col">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
                <div class="col">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
                <div class="col">
                    <img src="https://picsum.photos/seed/picsum/200/300" />
                </div>
            </div>

        </div>



        <!-- SINGLE VIEW-->

        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <p>Individual recipe</p>

            <div class="profile">
                <div class="container-flex">
                    <div class="post">
                        <div class="header">
                            <div>
                                <strong> First recipe</strong>
                            </div>
                            <div>
                                01/16/2023
                            </div>

                        </div>
                        <div id="">
                            <img
                                src="insert here" />

                        </div>
                        <div>
                            <p>
                                "Description of first recipe"
                            </p>
                        </div>
                    </div>
                </div>
                <div class="post">
                    <div class="header">
                        <div>
                            <strong>Second recipe </strong>
                        </div>
                        <div>
                            01/16/2023
                        </div>

                    </div>
                    <div id="mine">
                        <img
                            src="insert here" />


                    </div>
                    <div>
                        <p>
                            Description of second recipe 
                        </p>
                    </div>
                </div>
                <div class="post">
                    <div class="header">
                        <div>
                            <strong>Third Recipe</strong>
                        </div>
                        <div>
                            01/16/2023
                        </div>

                    </div>
                    <div id="mine">
                        <img
                            src="insert here" />


                    </div>
                    <div>
                        <p>
                            Description of third recipe 
                        </p>
                    </div>
                </div>

            </div>

        </div>

    </div>




</body>

</html>