<?php

namespace Rocket\ProjectBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('RocketProjectBundle:Default:index.html.twig');
    }
}
