import React  from 'react';
import {Summary} from '../../components/Summary'
import {ButtonCreateCompany} from '../../components/ButtonCreateCompany'

const Page = ()=>{
  return (
    <>
      <a href="/createCompany">
          <ButtonCreateCompany/>
      </a>
      <Summary/>
    </>
    )
}

export default Page;