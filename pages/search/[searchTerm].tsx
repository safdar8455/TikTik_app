import axios from 'axios';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useState} from 'react'

import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NoResults';
import { Video, IUser } from '../../types';
import { BASE_URL } from '../../utils';
import useAuthStore from '../../store/authStore';

const Search = ({videos}: {videos: Video[]}) => {
  return (
    <div className='w-full'>
        <div>

        </div>
    </div>
  )
}

export const getServerSideProps = async ({
    params: { searchTerm },
  }: {
    params: { searchTerm: string };
  }) => {
    const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`);
  
    return {
      props: { videos: res.data },
    };
  };

export default Search 