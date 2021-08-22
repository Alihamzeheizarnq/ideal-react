

function breadcrumb(name) {
    switch (name) {
        case 'links.group':

            return {
                title: 'مدیریت سرگروه ها',
                breadcrumb: [
                    { title: 'صفحه اصلی', link: '/', active: false },
                    { title: ' مدیریت سرگروه ها ', link: '/links/groups', active: true },
                ]
            };

        case 'users.index':
            return {
                title: 'لیست کاربران',
                breadcrumb: [
                    { title: 'صفحه اصلی', link: '/', active: false },
                    { title: 'مدیریت کاربران', link: '/users', active: false },
                    { title: 'لیست کاربران', link: '#', active: true },
                ]
            }
        case 'portofilo.edit':
            return {
                title: 'ویرایش نمونه کار ',
                breadcrumb: [
                    { title: 'صفحه اصلی', link: '/', active: false },
                    { title: 'نمونه کارها ', link: '/portofilo', active: false },
                    { title: 'ویرایش نمونه کار', link: '/users', active: true },
                ]
            }

        case 'portofilo.list':
            return {
                title: 'لیست نمونه کارها',
                breadcrumb: [
                    { title: 'صفحه اصلی', link: '/', active: false },
                    { title: 'نمونه کارها', link: '/users', active: true },
                ]
            }
        case 'portofilo.create':
            return {
                title: 'ایجاد نمونه کار',
                breadcrumb: [
                    { title: 'صفحه اصلی', link: '/', active: false },
                    { title: ' ایجاد نمونه کار', link: '#', active: true },
                ]
            }
   case 'posts.category':
            return {
                title: 'ایجاد  دسته بندی',
                breadcrumb: [
                    { title: 'صفحه اصلی', link: '/', active: false },
                    { title: 'وبلاگ', link: '#', active: false },
                    { title: 'ایجاد دسته بندی', link: '#', active: true },
                ]
            }

        default:
            return {
                title: 'صفحه اصلی',
                breadcrumb: [
                    { title: 'صفحه اصلی', link: '/', active: true },
                ]
            };;
    }
}
export default breadcrumb;