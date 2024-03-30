import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-500 dark:bg-blue-200 hover:bg-blue-800 dark:hover:bg-blue-800 w-full py-8">   
    <div className="px-4 mx-auto max-w-screen-lg">
      <ul className="flex flex-wrap justify-between mx-auto text-lg font-light">
        <li className="my-2">
          <a className="text-blue-400 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue transition-colors duration-200" href="https://github.com/gustavoflorez20">
            Github
          </a>
        </li>
        <li className="my-2">
          <a className="text-blue-400 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue transition-colors duration-200" href="https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/">
            LinkedIn
          </a>
            </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a href="https://www.facebook.com/ElAlbinoXJ" className="text-blue-400 transition-colors duration-200 hover:text-blue-800 dark:hover:text-blue">
                <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-blue-800 dark:hover:text-blue" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                    </path>
                </svg>
            </a>
            <a href="https://twitter.com/Elalbinoo" className="text-blue-400 transition-colors duration-200 hover:text-blue-800 dark:hover:text-blue">
                <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-blue-800 dark:hover:text-blue" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                    </path>
                </svg>
            </a>
            <a href="https://github.com/gustavoflorez20" className="text-blue-400 transition-colors duration-200 hover:text-blue-800 dark:hover:text-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-blue-800 dark:hover:text-blue" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
         
           
        </div>
    </div>
</footer>

    
  )
}

export default Footer