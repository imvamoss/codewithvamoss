interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'FE ONLINE 2.0',
    description: `Smart, Fast & Secure loan application. FE ONLINE 2.0 is the official financial application developed by VPBank SMBC Finance Company, built with Flutter for a seamless and high-performance user experience across platforms.`,
    imgSrc: '/static/images/fe_online_2.jpg',
    href: 'https://www.google.com',
  },
  {
    title: 'Übank',
    description: `BANK LESS. GET MORE. Übank is a digital bank that offers a range of financial services including savings, loans, and investments. With a focus on simplicity and user experience, Übank is the future of banking.`,
    imgSrc: '/static/images/ubank.jpg',
    href: 'https://www.google.com',
  },
  {
    title: 'Json to Dart converter',
    description: `A simple and easy-to-use tool for converting JSON to Dart class models and entities. With support for nested objects, arrays, and custom class names, this tool is perfect for developers working with Flutter and Dart.`,
    imgSrc: '/static/images/json-to-dart.png',
    href: '/projects/json-to-dart',
  },
]

export default projectsData
