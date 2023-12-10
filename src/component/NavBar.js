import React from 'react'
import { Collapse,Dropdown, initTE} from "tw-elements";
import {NavLink} from "react-router-dom";




function NavBar() {
  initTE({ Collapse, Dropdown });
  let countprod = JSON.parse(localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')).length:0;

  console.log(countprod);
  return (
    <>
{
/*<!-- Main navigation container -->*/
<nav
  className="flex-no-wrap  shadow-xl mb-16 relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3 container m-auto">
    <button
      className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
      
      data-te-collapse-init
      data-te-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent1"
      aria-expanded="false"
      aria-label="Toggle navigation">
      {/*<!-- Hamburger icon --> */}
      <span className="[&>svg]:w-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd" />
        </svg>
      </span>
    </button>

    {/*<!-- Collapsible navigation container --> */}
    <div
      className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
      id="navbarSupportedContent1"
      data-te-collapse-item>
      {/*<!-- Logo --> */}
      <NavLink
        className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
        to="/">
        <h1 className='text-4xl text-red-600'>Reda</h1>
      </NavLink>
      {/*<!-- Left navigation links --> */}
      <ul
        className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
        data-te-navbar-nav-ref>
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          {/*<!-- Dashboard link -->*/}
          <NavLink
            className="text-neutral-500 transition duration-200 hover:hover:text-red-500 hover:ease-in-out focus:hover:text-red-500 disabled:text-black/30 motion-reduce:transition-none   lg:px-2 [&.active]:text-red-600 "
            to="/"
            data-te-nav-link-ref>Home</NavLink>
        </li>
        {/*<!-- Team link -->*/}
        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <NavLink
            className="text-neutral-500 transition duration-200 hover:hover:text-red-500 hover:ease-in-out focus:hover:text-red-500 disabled:text-black/30 motion-reduce:transition-none   lg:px-2 [&.active]:text-red-600 "
            to="/products"
            data-te-nav-link-ref>Products</NavLink>
        </li>
  
      </ul>
    </div>

    {/**<!-- Right elements --> */}
    <div className="relative flex items-center">
      {/**<!-- Cart Icon --> */}
      <NavLink to={'/products'}
     className="mr-4 relative text-neutral-600 transition duration-200 hover:text-red-500 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  [&.active]:text-red-600  " >
        <span className="[&>svg]:w-5 "><div className=" absolute -top-4 right-0 text-red-500">{countprod}</div>
          <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"fill="currentColor"className="h-5 w-5"><path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" /></svg>
        </span>
      </NavLink>

      <div className="relative">
        <NavLink
          className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
          to="/"role="button"aria-expanded="false">
          {/**<!-- User avatar --> */}
          <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
            className="rounded-full"
            style={{height: "25px", width: "25px"}}
            alt=""loading="lazy" />
        </NavLink>
      </div>
    </div>
  </div>
</nav>

}
    </>
  )
}

export default NavBar
