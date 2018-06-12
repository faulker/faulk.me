const ResumeApps = [
    {
        slug: 'chrome-extensions',
        title: 'Chrome Extensions',
        apps: [
            {
                key: 'wallabagit',
                title: 'WallabagIt',
                link: 'https://github.com/faulker/WallabagIt',
                description: 'A Chrome extension that integrates with the Wallabag "Read It When You Want" app.',
                icon: 'fa-chrome',
                github: 'https://github.com/faulker/WallabagIt',
            },
            {
                key: 'apptailr',
                title: 'AppTailr',
                link: 'https://github.com/faulker/AppTailr',
                description: 'Quickly enable/disable selected extensions from the chrome bar.',
                icon: 'fa-chrome',
            },
        ]
    },
    {
        slug: 'laravel',
        title: 'Laravel',
        icon: 'fa-laravel',
        apps: [
            {
                key: 'laravelexport',
                title: 'Laravel Eloquent Export',
                link: 'https://github.com/faulker/eloquent-export',
                description: 'Give the ability to build export profiles/configurations to be used by a artisan command to export data from the database using Eloquent models.',
                icon: 'fa-laravel',
            },
            {
                key: 'laravelrackspace',
                title: 'Laravel 5 Rackspace CloudQueue Driver',
                link: 'https://github.com/faulker/laravel5-rackspace-cloudqueue',
                description: 'A Laravel 5 que driver for queuing job to Rackspace\'s CloudQueue service.',
                icon: 'fa-laravel',
            },
        ]
    },
];

const OldApps = [
    {
        slug: 'windows',
        title: 'Windows Tools',
        icon: 'fa-windows',
        apps: [
            {
                key: 'starthidden',
                title: 'StartHidden',
                route: '/starthidden',
                download:'/download/StartHidden.exe',
                version: {
                    ver: '1.0',
                    updated: '4/2012'
                },
                description: 'A small tool for starting applications hidden even if the application normally has GUI. Most of the time I use this tool to start applications hidden from a batch file.',
                icon: 'fa-cogs',
                usage: ['StartHidden.exe [application you wish to start]'],
                requirements:[
                    'Windows XP (SP3)+',
                    {
                        title: 'MS .NET Framework 4',
                        url: 'https://www.microsoft.com/en-us/download/details.aspx?id=17718'
                    }
                ]
            },
            {
                key: 'closehider',
                title: 'CloseHider',
                route: '/closehider',
                download:'/download/CloseHider.exe',
                version: {
                    ver: '1.0',
                    updated: '6/2012'
                },
                description: 'A small tool for starting applications and removing/disabling the [x] button from the top of the application and the "close" option from the application\'s drop down menu.<br>At this time it doesn\'t prevent <kbd>Alt + F4</kbd> from closing the application.',
                icon: 'fa-cogs',
                usage: ['CloseHider.exe [application you wish to start]'],
                imgs: [
                    'closehider_button.png',
                    'closehider_menu.png'
                ],
                requirements:[
                    'Windows XP (SP3)+',
                    {
                        title: 'MS .NET Framework 4',
                        url: 'https://www.microsoft.com/en-us/download/details.aspx?id=17718'
                    }
                ]
            },
            {
                key: 'ieproxyswitch',
                title: 'IEProxySwitch',
                route: '/ieproxyswitch',
                download:'/download/IEProxySwitch.exe',
                version: {
                    ver: '2.012',
                    updated: '3/2013'
                },
                description: 'A small and basic tool that sits in your taskbar and lets you turn the Internet Explorer proxy off and on.',
                icon: 'fa-sitemap',
                imgs: [
                    'ieproxyswitch.png'
                ],
                requirements:[
                    'Windows XP (SP3)+',
                    {
                        title: 'MS .NET Framework 4',
                        url: 'https://www.microsoft.com/en-us/download/details.aspx?id=17718'
                    }
                ]
            },
            {
                key: 'ntpclient',
                title: 'NTPClient',
                route: '/ntpclient',
                download:'/download/NTPClient.exe',
                version: {
                    ver: '1.2',
                    updated: '2/2013'
                },
                description: 'A very basic application that will update the time of a Windows system by polling the time from a NTP server. Some may ask why I would build a NTP client for windows when Windows has one built in, and it would be a good question, the reason is that I have two Windows 2008 R2 server that refuse to update with a NTP server using the built in NTP client so I created this small tool to get around that issue.',
                icon: 'fa-sitemap',
                github: '',
                requirements:[
                    'Windows 2008+, Windows XP (SP3)+',
                    {
                        title: 'MS .NET Framework 4',
                        url: 'https://www.microsoft.com/en-us/download/details.aspx?id=17718'
                    }
                ],
                usage:[
                    '-s  --server   Set NTP server. (Default: 0.pool.ntp.org)',
                    '-t  --timeout  Set timeout for the NTP server to response. (Default: 5000)',
                    '-u  --utc      Return UTC time not a time based on the systems local time zone.',
                    '-p  --print    Display retunred time only, don\'t set the system time.',
                    '-?  --help     This screen.',
                    'exp. NTPClient.exe -s 0.pool.ntp.org',
                ]
            },
            {
                key: 'upchuck',
                title: 'UpChuck',
                route: '/upchuck',
                download:'/download/UpChuck.exe',
                version: {
                    ver: '1.1',
                    updated: '3/2013'
                },
                description: 'A tool that watches to see if a system is responding to pings and if it is or is not it will pop-up a message and/or start an application.<br>I created this tool for those times when I\'ve reboot a computer or server and then start working on another project and forget that I am waiting for the computer or server to come back up. UpChuck alerts you if a system comes online or goes offline by popping up a message or starting a program.',
                icon: 'fa-sitemap',
                requirements:[
                    'Windows XP (SP3)+',
                    {
                        title: 'MS .NET Framework 4',
                        url: 'https://www.microsoft.com/en-us/download/details.aspx?id=17718'
                    }
                ],
                imgs:[
                    'upchuck.png'
                ]
            },
            {
                key: 'userfinder',
                title: 'UserFinder',
                route: '/userfinder',
                download:'https://github.com/faulker/UserFinder/blob/master/UserFinder/bin/Release/UserFinder.exe',
                version: {
                    ver: '2.0.0.1',
                    updated: '4/2013'
                },
                description: 'Allows an administrator to easily search through a domain to find what system/s a specified user is logged on to.',
                icon: 'fa-cogs',
                github: 'https://github.com/faulker/UserFinder',
                requirements:[
                    'Windows XP (SP3)+',
                    {
                        title: 'MS .NET Framework 4',
                        url: 'https://www.microsoft.com/en-us/download/details.aspx?id=17718'
                    }
                ],
                imgs:[
                    'userfinder.png'
                ]
            },
            {
                key: 'argumentstarter',
                title: 'Argument Starter',
                route: '/argstarter',
                url:'/download/ArgumentStarter.exe',
                version: {
                    ver: '1.3',
                    updated: '2/2013'
                },
                description: 'Argument Starter is an application that gives you an easy way to start applications with arguments/parameters.',
                icon: 'fa-cogs',
                requirements:[
                    'Windows XP (SP3)+',
                    {
                        title: 'MS .NET Framework 4',
                        url: 'https://www.microsoft.com/en-us/download/details.aspx?id=17718'
                    }
                ],
                usage:[
                    '-?  Help',
                    '-i  Add "Run with Arguments" to context menu (i.e. Install)',
                    '-u  Remove "Run with Arguments" from context menu (i.e Uninstall)'
                ],
                imgs:[
                    '/argument_starter.png',
                    '/argument_starter_menu.png',
                ]
            },

        ]
    }
];

export {ResumeApps, OldApps};