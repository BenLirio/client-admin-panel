# Client Admin Panel

## Running & installing

## Requirements
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

