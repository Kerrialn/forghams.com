<?php

namespace App\Controller\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;

class AppController extends AbstractController
{
    #[Route(path: '/', name: 'landing')]
    public function landing() {
        return $this->render('app/landing.html.twig');
    }

    #[Route(path: '/about', name: 'about')]
    public function about() {
        return $this->render('app/about.html.twig');
    }

    #[Route(path: '/services', name: 'services')]
    public function services() {
        return $this->render('app/services.html.twig');
    }

    #[Route(path: '/booking', name: 'booking')]
    public function booking() {
        return $this->render('app/booking.html.twig');
    }



}