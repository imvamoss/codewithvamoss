import { clsx } from 'clsx'

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-r from-gray-500 to-slate-400',
    'dark:bg-gradient-to-l dark:from-indigo-700 dark:to-emerald-600',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  )

  return (
    <div className={className}>
      Hello, folks! <br />
      <span className="font-bold">I'm VamoSs. Welcome to my creative world and explore my ideas!</span>
    </div>
  )
}

export default Greeting
