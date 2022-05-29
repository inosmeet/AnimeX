import axios from 'axios';
import { useEffect, useState, useRef, useCallback }  from 'react';


export default function useInfiniteScrolling(api, pageNumber) {
    useEffect(() => {
        axios({
            method: "GET",
            url: api,
        }).then()
    }, [pageNumber]);
    return null
}
