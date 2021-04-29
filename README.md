<p align="center">
  <a href="https://github.com/brehen/scuffed-drdropin/blob/main/static/gatsby.png">
    <img alt="Gatsby" src="https://github.com/brehen/scuffed-drdropin/blob/main/static/gatsby.png" width="150" />
  </a>
</p>

Scuffed dr dropin case.

Link to live netlify site based on this repo: https://scuffed-drdropin.netlify.app/

Case text:

## Programming Case 2021

In this task you’ll be consuming an endpoint from the Dr.Dropin staging API and present the opening hours of the clinics in a certain way.

You can use whatever frontend framework you prefer.

### Task

Consume the endpoint https://staging-core.api.drdropin.no/v1/clinics and present a list of clinics with its respective opening hours. The clinic name should be displayed for each clinic, and opening hours displayed by day, chronologically. If the isOpen parameter in the data is set to false, the opening hours for that day should be ‘Closed’. If a clinic is open 24-hours, the opening hours should be 'All day'. If two or more consecutive days in a week have the same opening hours, they should be concatenated and displayed in a single row.

An example presentation:

#### Grünerløkka

Monday: 8-22

Tuesday-Thursday: 10-22

Friday: 10-20

Saturday: 10-18

Sunday: Closed

The focus of this task is not on creating the ‘prettiest’ presentation/UI but rather on the implementation of the required logic.

Good luck!
