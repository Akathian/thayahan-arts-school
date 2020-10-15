import {
    trigger,
    animate,
    style,
    group,
    animateChild,
    query,
    transition
} from '@angular/animations';

export const toRight = [
    /* order */
    query(':enter, :leave', [
        style({ position: 'fixed', width: '100%' })
    ], { optional: true }),
    group([  // block executes in parallel
        query(':enter', [
            style({ transform: `translateX(${1 * 100}%)` }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out',
                style({ transform: `translateX(${1 * -100}%)` }))
        ], { optional: true }),
    ])
]

export const toLeft = [
    /* order */
    query(':enter, :leave', [
        style({ position: 'fixed', width: '100%' })
    ], { optional: true }),
    group([  // block executes in parallel
        query(':enter', [
            style({ transform: `translateX(${-1 * 100}%)` }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out',
                style({ transform: `translateX(${-1 * -100}%)` }))
        ], { optional: true }),
    ])
]

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage => *', toRight),
        transition('* => HomePage', toLeft),
        transition('AboutPage => GalleryPage', toRight),
        transition('AboutPage=> ClassesPage', toRight),
        transition('AboutPage=> CompetitionsPage', toRight),
        transition('GalleryPage => AboutPage', toLeft),
        transition('GalleryPage => ClassesPage', toRight),
        transition('GalleryPage => CompetitionsPage', toRight),
        transition('ClassesPage => AboutPage', toLeft),
        transition('ClassesPage => GalleryPage', toLeft),
        transition('ClassesPage => CompetitionsPage', toRight),
        transition('CompetitionsPage => AboutPage', toLeft),
        transition('CompetitionsPage => GalleryPage', toLeft),
        transition('CompetitionsPage => ClassesPage', toLeft),
        transition('ContactPage => *', toLeft),
        transition('* => ContactPage', toRight),
    ]);

