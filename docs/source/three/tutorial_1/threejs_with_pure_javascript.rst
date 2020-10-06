
Tutorial 1 - Three.js with pure javascript
=============================================

Overview
---------------------------------------------
This tutorial describes how to setup a three.js web app using only html and javascript files. To learn more about three.js check the `Three.js Fundamentals. <https://threejsfundamentals.org/>`_

Creating an index.html entry point to our app
----------------------------------------------
This example consists of an index.html file::

  .. literalistic:: index.html
    :language: html
    :linenos:

The three.js library can be used without any build system, either by uploading files to your own web server or by using an existing CDN.
Because the library relies on ES modules, any script that references it must use type="module".

    - Check the `installation. <https://threejs.org/docs/index.html#manual/en/introduction/Installation>`__ for
      more information about how to install three.js library and use it in your project.

This index.html links to a JScript.js file containing the code for visualising the cube which is embedded below::

  .. literalistic:: JS/JScript.js
    :language: javascript
    :linenos:

Visualising a rotating cube with three.js
----------------------------------------------
An example of code to visualise a rotating cube with three.js is provided in
the `JS folder <https://github.com/ABI-Web-Apps/ABI-web-app-documentation/tree/master/docs/source/three/tutorial_1>`__
of this tutorial.


























