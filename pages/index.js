import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format';

// compoenents
import Section1 from '../components/section1';
import Section2 from '../components/section2';

export default function Home() {
  return (
   <Format>
      <Section1></Section1>
      <Section2></Section2>
   </Format>
  )
}
