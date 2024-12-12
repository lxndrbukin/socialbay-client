export default function HeaderSearchBar(): JSX.Element {
  return <form className='header_search'>
    <input name='search' placeholder='Search' />
    <button>OK</button>
  </form>
}