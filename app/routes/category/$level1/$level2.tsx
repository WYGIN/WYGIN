import { client } from "~/utils/PrismicClient";
import BlogGrid from "~/components/blogs/GridWithFeaturedPost";
  
 import type { MetaFunction } from "@remix-run/cloudflare"; // or cloudflare/deno 
 import type { LinksFunction } from "@remix-run/cloudflare"; // or cloudflare/deno 
  
 export const links: LinksFunction = () => { 
   return [] 
 } 
  
 export const meta: MetaFunction = () => { 
   return { 
      
   }; 
 }; 
  
 export const loader = async({ params }) => { 
   const postData = await client.get({ 
     graphQuery: ` 
       { 
          post {
            title
            body
            featured_image
            category {
              ...on category {
                level1
                level2
              }
            }
            tags {
              tag {
                ...on tag {
                  label
                }
              }
            }
            author {
              ...on author {
                name
                profile
                uid
              }
            }
            uid
          }
       } 
     `, 
     predicates: [ 
        prismic.predicate.at('my.post.category.level1', params.level1),
        prismic.predicate.at('my.post.category.level2',params.level2)
     ] 
   }); 
   if(!postData || !postData.keys('post').length) { 
     throw new Response("", { status: 404 }); 
   } 
   return json(postData); 
 } 
  
 export default function Post() { 
   const { categoryData } = useLoaderData<typeof loader>();
   return (
     <BlogGrid posts={ categoryData }>
     </BlogGrid>
   )
 } 
  
 export function CatchBoundary() { 
   const caught = useCatch<ThrownResponses>(); 
   
   switch (caught.status) { 
     case 401: 
       return (
         <>
         </>
       ); 
     case 404: 
       return (
         <>
         </>
       ); 
   } 
    
   return ( 
     <div> 
       Something went wrong: {caught.status}{" "} 
       {caught.statusText} 
     </div> 
   ); 
 } 
  
 export function ErrorBoundary({ error }) { 
   return ( 
     <div> 
       <h1>Error</h1> 
       <p>{error.message}</p> 
       <p>The stack trace is:</p> 
       <pre>{error.stack}</pre> 
     </div> 
   ); 
 }
