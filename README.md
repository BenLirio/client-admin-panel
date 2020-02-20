# Client Admin Panel

## Running & installing

## Requirements
### Visual Requirements
#### Header
* Hamburger Menu (non functional)
* Company Logo (square)
* Company name
* Admin name with user icon
#### Workspace Filters
* Filter by date
* Filter by policy
* Filter by name
#### Business Group List
* List
  * Checkbox
  * Name
#### Workspace table
* Table
  * Checkbox
  * Name
  * ID
  * Last Updated
  * Policy
* Multi-update policy
* Pagination


### Functional Requirements
Inputs
* Business Groups (Has many workspaces)
  * lazy loading
  * key fields
    * id
    * name
* Workspaces (Belongs to workspaces)
  * pagination
  * functional fields
    * id
    * bg_id
    * name
    * policy
  * additional fields
    * date_created
    * date_updated
    * description
    * contact
    * contact email

Outputs
* Alter `policy` property on workspaces: 90 days | 180 days | 365 days
  * Dropdown from table row
  * Dropdown from table (effecting all selected)

User (admin) stories
* As an admin, the user would like to view the policy status on given workspaces so that they will be able to update them.
* As an admin, the user will be aloud to filter workspaces by their respective business group in order to simplify the table
* As an admin the user will be aloud to filter workspaces based on date, name, and policy in order to save time.
* Users will be aloud to updated policy in batches & individually based on selected policies.

Error Handling
* Filter out invalid fields on workspaces
* Display feedback when loading from the server has failed
* Display feedback when updating policy has failed

Protocols/Authentication/Security
* Prototype, None

Speed & Response time
* Lazy load business groups
* Paginate workspaces
* Filter workspaces only when necessary
* Prototype, unless program starts to lag don't worry about the algorithms

Reliability
* No glitches with given data set
* Assume data is clean due to prototype & static data set

Other performance optimizations (memory, number of render, etc...)
* Prototype, don't worry to optimize get functional program first





