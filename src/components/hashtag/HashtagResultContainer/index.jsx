import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import HashtagResultView from '../HashtagResultView';

function HashtagResultContainer({ keyword }) {
  const [searchResult, setSearchResult] = useState([]);

  const searchInArray = async (collectionName, tag, value) => {
    const q = query(collection(db, collectionName), where(tag, 'array-contains', value));
    const querySnapshot = await getDocs(q);

    const results = [];

    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
    });

    return results;
  };

  useEffect(() => {
    searchInArray('post', 'tag', keyword).then((results) => {
      const dataValues = results.map((doc) => {
        const data = doc.data;

        data.key = doc.id;
        return data;
      });

      setSearchResult(dataValues);
    });
  }, [keyword]);

  return <HashtagResultView postList={searchResult} />;
}

export default HashtagResultContainer;
