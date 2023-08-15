##  Requirement for ``.env.local``
```
NEXTAUTH_SECRET=ADD
NEXTAUTH_URL=http://localhost:3000
SECRET_KEY=ADD
JWT_KEY=ADD
```


## ``i18`` How to use?
```
'use client'

import { useTranslations } from 'next-intl'


const YourComponent = () => {

    const t = useTranslations('Index')

    return <h1>{t('title')}</h1>
}
```
```
hey
```