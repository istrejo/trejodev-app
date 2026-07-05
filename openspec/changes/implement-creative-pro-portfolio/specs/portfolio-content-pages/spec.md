# Portfolio Content Pages Specification

## Purpose

Define the v1 public page set, approved content boundaries, and copy constraints for the bilingual TrejoDev site.

## Requirements

### Requirement: Six approved public pages

The system SHALL provide exactly six primary public pages for v1: Home, About, Experience, Skills, Certifications, and Contact, with CV access exposed through the approved page content.

#### Scenario: Approved page set is rendered

- GIVEN a visitor browses the public site
- WHEN the visitor uses the main navigation and page links
- THEN the visitor can reach the six approved pages in both locales and can access CV download actions from the site

#### Scenario: Projects stays out of primary scope

- GIVEN v1 content is published
- WHEN the visitor scans the main navigation and featured sections
- THEN the site SHALL NOT present Projects as a primary destination or feature invented project content

### Requirement: Public copy reflects approved positioning

The system SHALL present Alejandro Trejo and TrejoDev as **Frontend Developer** branding, SHALL keep all visible copy available in English and Spanish, and SHALL avoid filler language about “portfolio” or explicit recruiter-directed messaging.

#### Scenario: Hero and metadata use approved positioning

- GIVEN a visitor reads the hero, page titles, or other high-visibility copy
- WHEN the public content is rendered
- THEN the site uses Frontend Developer positioning and SHALL NOT use Senior as the primary brand

#### Scenario: Public content honors non-goals

- GIVEN the site summarizes experience or future work
- WHEN content is prepared for publication
- THEN it SHALL NOT invent projects, reveal private company details, or use placeholder copy that calls the site a portfolio as filler

### Requirement: Projects remains hidden or minimal if present

The system MAY keep a non-promoted Projects route for future use, but any v1 public representation SHALL remain minimal and SHALL state only that public work is being curated.

#### Scenario: Hidden projects route is used

- GIVEN a direct visit reaches a Projects route in v1
- WHEN the page renders
- THEN it shows a minimal curation state and no fabricated case studies
