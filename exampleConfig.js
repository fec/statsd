{
  graphitePort: 2003
, graphiteHost: "graphite.host.com"
, port: 8125
, statusPort: 8126
, statusAddr: "0.0.0.0"
, flushBuckets: [
    {
      pattern: "^.*"
    , flushInterval: 60000
    , statPrefix: "stats60"
  },
    {
      pattern: "^.*"
    , flushInterval: 10000
    , statPrefix: "stats10"
    },
    {
      pattern: "^.*"
    , flushInterval: 1000
    , statPrefix: "stats1"
    }
  ]
}