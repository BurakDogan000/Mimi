<!DOCTYPE html>
<html lang="en">
<head>
    <title>Mimi - Explore The World!</title>
    <?php include "components/tools/head.html" ?>
    <link href="assets/styles/index.css" rel="stylesheet" />
</head>
<body>
    <?php include "components/tools/header.html" ?>
    <?php include "components/tools/navbar.html" ?>

    <div class="container-fluid main-section">
        <?php include "components/theme/index/hero.html" ?>
        <?php include "components/theme/index/categories.html" ?>
        <div class="container">
            <div class="row d-flex">
                <div class="col-md-8">
                   <?php include "components/theme/index/recent_blog.html" ?>
                   <?php include "components/theme/index/blogs.html" ?>
                </div>
                <div class="col-md-4 ps-md-5 position-relative">
                   <?php include "components/theme/index/featured_blogs.html" ?>
                </div>
            </div>
            <?php include "components/theme/index/property.html" ?>
        </div>
    </div>

    <?php include "components/tools/subscribe.html" ?>
    <?php include "components/tools/footer.html" ?>
    <?php include "components/tools/script.html" ?>
    <script src="assets/scripts/index.js"> </script>
</body>
</html>