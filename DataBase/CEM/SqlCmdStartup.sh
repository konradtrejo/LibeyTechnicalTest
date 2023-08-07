sleep 60
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 123456 -d master -i /var/opt/sqlserver/SqlCmdScript.sql