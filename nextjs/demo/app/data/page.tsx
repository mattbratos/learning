// @ts-ignore
import Card from '@/components/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Fetching',
  description: 'Basics of Data Fetching in Next.js',
}

export default function Basics() {
  return (
    <div className='container mx-auto'>
      <Card
        title='Data Fetching'
        content='Meta Data in next js is super important for SEO. It is the data that is used by search engines to understand the content of your website. This data is used to display the website in search results.'
      />
    </div>
  )
}
