import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/landingpage.css';
import Navbar2 from './Navbar2';
// import Dropdown from './Dropdown';

const Blogpost=({Blogs})=> {
const id=useParams()
// useEffect(()=>{console.log(Blogs[0].id);
//     console.log(id.blogId);},[]);

const ourblog=Blogs.find(item => item.id == id.blogId);
console.log(ourblog)
    return (
      <div>
        <Navbar2/>
      <main class="pt-8 pb-16  border-b-2  lg:pt-16 lg:pb-24 bg-white dark:bg-gray-100">
  <div class="flex justify-between px-4 border-width: 2px; mx-auto max-w-screen-xl ">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img class="mr-4 w-16 h-16 rounded-full" src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/personal-branding-62792f2def4b9-sej-1280x720.png" alt="Jese Leos" />
                      <div>
                          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-black">{ourblog.author}</a>
                          <p class="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Cogoport</p>
                          <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">{ourblog.date}</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 border-width: 2px; lg:mb-6 lg:text-4xl dark:text-black">{ourblog.title}</h1>
          </header>
          <p class="lead">{ourblog.content}</p>
          <figure>
              <figcaption>Digital art by Anonymous</figcaption>
          </figure>
          <h2>Getting started with Cogoport</h2>
          <p>First of all you need to understand how Cogoport works. This library is not another framework.
              Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
              documentation.</p>
          <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
              and datepickers which you can optionally include into your project via CDN or NPM.</p>
          <p>You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart
                  guide</a> to explore the elements by including the CDN files into your project. But if you want
              to build a project with Cogoport I recommend you to follow the build tools steps so that you can
              purge and minify the generated CSS.</p>
          <p>You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
              you get started with your projects even faster. You can check out this <a
                  href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand
              the differences between the open-source and pro version of Cogoport.</p>
          <h2>When does design come in handy?</h2>
          <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
              will come in handy:</p>
          <ol>
              <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                  follow your intended user journey and buy something from the site you’ve designed? By running a
                  usability test, you’ll be able to see how users will interact with your design once it’s live;
              </li>
              <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                  properly? Pass your prototype to your data protection team and they can test it for real;</li>
              <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                  providing your client with a hands-on experience;</li>
              <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                  design elements, designers and developers can understand each other — and the project — better.
              </li>
          </ol>
          <h3>Laying the groundwork for best design</h3>
          <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
              you can think things through before committing to an actual design project.</p>
          <p>Let's start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
          <h3>Understanding typography</h3>
          <h4>Type properties</h4>
          <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
              letters. A typeface represents shared patterns across a collection of letters.</p>
          <h4>Baseline</h4>
          <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
              letters. A typeface represents shared patterns across a collection of letters.</p>
          <h4>Measurement from the baseline</h4>
          <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
              letters. A typeface represents shared patterns across a collection of letters.</p>
          <h3>Type classification</h3>
          <h4>Serif</h4>
          <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
              Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
              following:</p>
          <h4>Old-Style serifs</h4>
          <ul>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
          </ul>
          <ol>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
          </ol>
          <h3>Laying the best for successful prototyping</h3>
          <p>A serif is a small shape or projection that appears at the beginning:</p>
          <blockquote>
              <p>Cogoport is just awesome. It contains tons of predesigned components and pages starting from
                  login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
          </blockquote>
          <h4>Code example</h4>
          <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
              Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
              following:</p>
          <pre><code class="language-html">&lt;&gt;
&lt;div class="flex flex-col justify-center items-center"&gt;
  &lt;dt class="mb-2 text-3xl font-extrabold"&gt;73M+&lt;/dt&gt;
  &lt;dd class="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;developers&lt;/dd&gt;
&lt;/div&gt;
&lt;div class="flex flex-col justify-center items-center"&gt;
  &lt;dt class="mb-2 text-3xl font-extrabold"&gt;1B+&lt;/dt&gt;
  &lt;dd class="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;contributors&lt;/dd&gt;
&lt;/div&gt;
&lt;div class="flex flex-col justify-center items-center"&gt;
  &lt;dt class="mb-2 text-3xl font-extrabold"&gt;4M+&lt;/dt&gt;
  &lt;dd class="text-lg font-normal text-gray-500 dark:text-gray-400"&gt;organizations&lt;/dd&gt;
&lt;/div&gt;
&lt;/dl&gt;
</code></pre>
          <h4>Table example</h4>
          <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
          </p>
          <table>
              <thead>
                  <tr>
                      <th>Country</th>
                      <th>Date &amp; Time</th>
                      <th>Amount</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>United States</td>
                      <td>April 21, 2021</td>
                      <td><strong>$2,300</strong></td>
                  </tr>
                  <tr>
                      <td>Canada</td>
                      <td>May 31, 2021</td>
                      <td><strong>$300</strong></td>
                  </tr>
                  <tr>
                      <td>United Kingdom</td>
                      <td>June 3, 2021</td>
                      <td><strong>$2,500</strong></td>
                  </tr>
                  <tr>
                      <td>Australia</td>
                      <td>June 23, 2021</td>
                      <td><strong>$3,543</strong></td>
                  </tr>
                  <tr>
                      <td>Germany</td>
                      <td>July 6, 2021</td>
                      <td><strong>$99</strong></td>
                  </tr>
                  <tr>
                      <td>France</td>
                      <td>August 23, 2021</td>
                      <td><strong>$2,540</strong></td>
                  </tr>
              </tbody>
          </table>
          <h3>Best practices for setting up your prototype</h3>
         
          <section class="not-format">
              <div class="flex justify-between items-center mb-6">
                  <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-black">Discussion (20)</h2>
              </div>
              <form class="mb-6">
                  <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                      <label for="comment" class="sr-only">Your comment</label>
                      <textarea id="comment" rows="6"
                          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="Write a comment..." required></textarea>
                  </div>
                  <button type="submit"
                      class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                      Post comment
                  </button>
              </form>
              <div class="">
  <div class="">
    <div class="bg-white max-w-xl rounded-2xl px-10 py-3 shadow-lg hover:shadow-2xl transition duration-500">
      <div class="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center font-bold text-white">LOGO</div>
      <div class="mt-4">
        <h1 class="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">Product Review</h1>
        <div class="flex mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <p class="mt-4 text-md text-gray-600">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happines.</p>
        <div class="flex justify-between items-center">
          <div class="mt-4 flex items-center space-x-4 py-6">
            <div class="">
              <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80" alt="" />
            </div>
            <div class="text-sm font-semibold">John Lucas • <span class="font-normal"> 5 minutes ago</span></div>
          </div>
          <div class="p-6 bg-primary-600 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">+</div>
        </div>
      </div>
    </div>
  </div>
</div>
            
             
              
          </section>
      </article>
  </div>
</main>




<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md sm:text-center">
          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
          <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                      <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
      </div>
  </div>
</section>  
      </div>
    );
  }
  
  export default Blogpost;