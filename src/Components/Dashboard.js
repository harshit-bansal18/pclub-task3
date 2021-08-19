import {Link} from 'react-router-dom'
import { UserCircleIcon, SearchIcon} from '@heroicons/react/solid'
function DashBoard(){
    return(
        <div id = 'wrap' className='w-full h-full items-center'>
            <h2 className='text-center font-bold text-3xl'>Welcome User</h2>
            <Link className='btn btn-primary btn-lg text-blue-600 float-right mr-10 bg-gray-100 rounded shadow' to='/login'>Login Page</Link>
            <div className='flex flex-col items-center lg:flex-row' id='inner-wrap'>
            <div className='ml-0 mt-10 items-center bg-gray-200 rounded shadow-2xl' style={{width:'400px'}}>
                <p className='text-indigo font-bold text-center h-10 font-serif text-italics text-2xl'>Matches</p>
                <hr/>
                <ul>
                    <li className='border-solid border-b-2 border-gray-100 h-16'> <UserCircleIcon className='h-12 w-12 inline my-2'/> Match 1</li>
                    <li className='border-solid border-b-2 border-gray-100 h-16'><UserCircleIcon className='h-12 w-12 inline my-2'/>Match 2</li>
                    <li className='border-solid border-b-2 border-gray-100 h-16'><UserCircleIcon className='h-12 w-12 inline my-2'/>Match 3</li>
                    <li className='border-solid border-b-2 border-gray-100 h-16'><UserCircleIcon className='h-12 w-12 inline my-2'/>Match 4</li>
                    <li className='border-solid border-b-2 border-gray-100 h-16'><UserCircleIcon className='h-12 w-12 inline my-2'/>Match 5</li>
                    <li className='border-solid border-b-2 border-gray-100 h-16'><UserCircleIcon className='h-12 w-12 inline my-2'/>Match 6</li>
                    <li className='h-16'><UserCircleIcon className='h-12 w-12 inline my-2'/>Match 7</li>
                </ul>
            </div>
            <div className='mx-auto items-center rounded  lg:mt-10' style={{width:'300px'}}>
                <p className='text-indigo font-bold  h-10 font-serif text-italics text-2xl'>Search Your Love</p>
                <input type='text' className='shadow-lg items-center bg-gray-100 h-8 font-bold'  ></input><SearchIcon onClick={()=>alert('Searching')} className='inline h-8 w-8 bg-gray-200 rounded border-2 border border-black ml-2 mt-0'/>
            </div>
            <div className='ml-0 my-10 items-center bg-gray-200 rounded shadow-2xl' style={{width:'400px'}}>
                <p className='text-indigo font-bold text-center h-10 font-serif text-italics text-2xl'>Heart Sent</p>
                <hr/>
                <ul>
                    <li className='border-solid border-b-2 border-white-100 h-16'> <UserCircleIcon className='h-12 w-12 inline my-2'/> Person 1</li>
                    <li className='border-solid border-b-2 border-white-100 h-16'><UserCircleIcon className='h-12 w-12 inline my-2'/>Person2</li>
                    <li className='border-solid border-b-2 border-white-100 h-16'><UserCircleIcon className='h-12 w-12 inline my-2'/>Person 3</li>
                    <li className='h-16'><UserCircleIcon className='h-12 w-12 inline my-2'/>Person 4</li>
                </ul>
            </div>
            </div>
        </div>
    );

}
export default DashBoard;