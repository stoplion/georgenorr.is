## Resume Generator
This is a static site resume generator using [BridgetownRB](https://www.bridgetownrb.com/).

### Get started
- clone repository
- (make sure you have Ruby installed on your computer)
- install `bundler` with `gem install bundler` (Ruby package manager)
- run `bundle install` (installs all Ruby gems needed for this project)
- [install Yarn](https://classic.yarnpkg.com/en/docs/install) (Javascript package manager)
- run `yarn install` (installs all Javascript packages needed for this project)
- checkout `package.json` for all commands (under `scripts`) To start up run `yarn run start` to start local server. 
- run `yarn run build` to build the static HTML site.. the static build will be under `output`


### Edit data

The resume data is structured using `JSON Resume` schema.

- [jsonresume.org](https://jsonresume.org/schema/)
- [resume-schema](https://github.com/jsonresume/resume-schema)

<details>
  <summary>
    Example JSON Resume Schema:
  </summary>

```JSON
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "picture": "",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "website": "http://johndoe.com",
    "summary": "A summary of John Doe...",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [{
      "network": "Twitter",
      "username": "john",
      "url": "http://twitter.com/john"
    }]
  },
  "work": [{
    "company": "Company",
    "position": "President",
    "website": "http://company.com",
    "startDate": "2013-01-01",
    "endDate": "2014-01-01",
    "summary": "Description...",
    "highlights": [
      "Started the company"
    ]
  }],
  "volunteer": [{
    "organization": "Organization",
    "position": "Volunteer",
    "website": "http://organization.com/",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "Description...",
    "highlights": [
      "Awarded 'Volunteer of the Month'"
    ]
  }],
  "education": [{
    "institution": "University",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "awards": [{
    "title": "Award",
    "date": "2014-11-01",
    "awarder": "Company",
    "summary": "There is no spoon."
  }],
  "publications": [{
    "name": "Publication",
    "publisher": "Company",
    "releaseDate": "2014-10-01",
    "website": "http://publication.com",
    "summary": "Description..."
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "Javascript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "references": [{
    "name": "Jane Doe",
    "reference": "Reference..."
  }]
}
```
</details>

- Resume data is located in `src/data/resume`.   
- Data is written in [YAML](https://yaml.org/). Each top level key in the `Resume Json` spec correlates to a YAML file in `src/data/resume` (currently it's missing some of these, only basics, work, education, and skill are there now).
- You can use (Markdown)[https://www.markdownguide.org/] in the Yaml files to format the text. 

## Roadmap
Any help here is welcome!!

- [ ] Add PDF exporting
- [ ] Add JSON exporting
- [ ] Add a JSON Resume compile step (each time you make a YAML edit, it compiles down the resume.json files)
- [ ] Add JSON Resume importing (allow some way for users to use their current resume.json to populate and build the YAML files here)
- [ ] Add LinkedIn Resume to JSON importing (similar to the last one, but allow users to ref their LinkedIn profile to build the JSON / YAML)
- [ ] Add Slim as Templating language
- [ ] Add JSON Resume linting (point out issues with the resume.json build)
- [ ] Add more resume Liquid templates (allow users to change the template)
