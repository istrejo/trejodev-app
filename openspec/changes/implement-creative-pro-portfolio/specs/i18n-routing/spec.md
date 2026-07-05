# I18n Routing Specification

## Purpose

Define bilingual route behavior and content separation for the English and Spanish site versions.

## Requirements

### Requirement: Locale-prefixed public routes

The system SHALL publish each approved public page under `/en` and `/es` using locale-prefixed routes, with English as the primary default locale for v1.

#### Scenario: A public page exists in both locales

- GIVEN a visitor requests a supported public page
- WHEN the route is generated for v1
- THEN the page exists under both `/en/...` and `/es/...` for the same content scope

#### Scenario: V1 uses shared slugs

- GIVEN a public subpage such as About or Experience
- WHEN its bilingual routes are defined
- THEN the English and Spanish versions SHALL use the same slug segment for v1 rather than locale-specific slug translations

### Requirement: Locale switching and content isolation

The system SHALL let visitors switch languages from any public page and SHALL keep visible content and metadata fully localized without mixed-language output.

#### Scenario: Switching language preserves the corresponding page

- GIVEN a visitor is viewing a supported page in one locale
- WHEN the visitor activates the language switcher
- THEN the site opens the equivalent page in the other locale

#### Scenario: Unsupported locale paths are not published

- GIVEN a request targets a locale outside the supported set
- WHEN the site resolves the route
- THEN it SHALL not expose that path as a valid public page
