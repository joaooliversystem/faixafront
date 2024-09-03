import SearchResuts from './searchResults'
import dynamic from 'next/dynamic';

const DynamicSearchResults = dynamic(() => import('./searchResults'), {
  ssr: false
})

function Search() {

  return (
    <DynamicSearchResults />
  );
}

export default Search;
