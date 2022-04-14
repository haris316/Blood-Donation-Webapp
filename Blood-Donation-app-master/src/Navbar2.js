import React, { Component } from 'react';

import {Link} from 'react-router-dom'
class Navbar2 extends Component {
    render() {
        return (
            <div>

<html lang="en" >
<head>
  <meta charset="UTF-8"/>
  <title>CodePen - Bootstrap Responsive Navbar</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"/><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'/>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'/><link rel="stylesheet" href="./style.css"/>

</head>
<body>

<header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      
      <a href="./" class="navbar-brand">Bootstrap Menu</a>
    </div>
    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
      <ul class="nav navbar-nav navbar-right">
      <Link to='/search'>
        <li>
          <a href="#">Home</a>
        </li>
        </Link>
        
        
        
        <li>
        <Link to='/req'>
          <a href="#">Place request</a>
          </Link>
          </li>
        <li class="active">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

  <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js'></script>
</body>
</html>

            </div>
        );
    }
}

export default Navbar2;