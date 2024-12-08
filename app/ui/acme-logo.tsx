import {lusitana} from '@/app/ui/fonts';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo(){
    return(
        <div className={`flex flex-row items-center leading-none text-white ${lusitana.className}`}>
            <GlobeAltIcon className='w-12 h-12 rotate-[45deg]'/>
            <p className='text-[44px]'>Acme</p>
        </div>
    )
}