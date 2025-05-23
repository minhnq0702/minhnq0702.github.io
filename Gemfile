source "https://rubygems.org"

# Basic Jekyll setup
gem "jekyll", "~> 4.2.0"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-seo-tag"
end

# Dependencies that might be causing issues
gem "ffi", "~> 1.15.0"
gem "sassc", "~> 2.4.0"
gem "webrick", "~> 1.7"

# For Windows
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end