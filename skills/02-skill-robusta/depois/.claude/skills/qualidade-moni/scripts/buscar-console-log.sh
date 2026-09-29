#!/usr/bin/env bash
grep -rn 'console\.log' src || echo "Nenhum console.log"
