<?php

declare(strict_types=1);

use App\Enum\LocaleEnum;
use Symfony\Bundle\FrameworkBundle\Controller\RedirectController;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

return static function (RoutingConfigurator $routingConfigurator): void {

    $routingConfigurator->add('index_redirect', '/')
        ->controller(RedirectController::class)
        ->defaults([
            'route' => 'landing',
            'permanent' => true,
            'keepQueryParams' => true,
            'keepRequestMethod' => true,
        ]);

    $routingConfigurator->import('../src/Controller/Controller/', 'attribute')
        ->prefix('/{_locale}')
        ->defaults([
            '_locale' => LocaleEnum::ENGLISH->value,
        ])
        ->requirements([
            '_locale' => '[a-z]{2}',
        ]);
};
