import React, { useState } from 'react'
import { useGetStudentsQuery } from '../lib/studensApi'

function students() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data,isSuccess} = useGetStudentsQuery()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Data,setData] = useState(data)

    console.log(data,'data')

  return (

    <div>
        {isSuccess && 
          data.map(stu => 
          <div key={stu.id}>
            <div>{stu.attributes.name}</div>
          </div>
          
          )}
    </div>
  )
}

export default students