 How can I fetch all Issues from the API...
 
 
    * assigned to a specific user?
    ```
    search/issues?assignee
    ```
    
    * created in a specific repo?
    ```
    GET /repos/:owner/:repo/issues
    ```
    ```
    /repos/:owner/:repo/issues/:number
    ```
    
    * assigned to a specific milestone? ...to any milestone? ...to none?
    ```
    GET /repos/:owner/:repo/milestones
    ```
    
    * that are still open? ...closed? ...either?
    ```
    /milestones?state=open? 
    ```
    
  What is the structure of an Issue resource?
  Dictionary
  
    * What fields are _always_ returned?
    creation date, # of open and closed issues, title, user, body, labels, state, id, url, html_url
    
    * What fields are _optionally_ returned?
    comments
    
    * What are the types and sample contents of _all_ returned fields?
    strings (including url), numbers, object literals, arrays
    
  How can I fetch all Milestones from the API? ...Labels?
  ```
  GET /repos/:owner/:repo/milestones
  ```
  ```
  GET /repos/:owner/:repo/labels
  ```
  
  What is the structure of the Milestone and Label resources?
  
  Label is structured as array of dictionarys with following keys name, color, url
  
  Milestone is an array of dictionaries

  
  How would I fetch...
  
  
    * ...all the _open_ Issues from a specific repo...
    ```
    /repos/:owner/:repo/issue?state=open
    ```
    
    * ...with the label "Attendance"...
    ```
    repos/:owner/:repo/issue?state=open?labels=attendance
    ```
    
    * ...sorted oldest first?
    ```
    repos/:owner/:repo/issue?state=open?labels=attendance?sort=created?direction=asc
    ```
    
    * ...with 100% task completion?
     To be continued
    
  **BEAST MODE** How would I...
  
  
    * ...fetch Issues for an assigned Milestone...
    
    
    * ...group them by Label...
    
    
    * ...and calculate percentage of total Issues?
