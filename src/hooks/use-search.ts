import { useMemo } from "react";
import { useRouter } from "next/router";
import { queryStringToString } from "src/utils/text";

const useSearch = () => {
    const router = useRouter();
    const { search: originalSearch } = router.query;
    const adaptedSearch = useMemo(() => queryStringToString(originalSearch), [originalSearch]);
    return adaptedSearch;
}

export default useSearch;