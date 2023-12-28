import{_ as d,o as t,c as o,Q as e}from"./chunks/framework.gI2xCOxE.js";const S=JSON.parse('{"title":"hadoop基本操作","description":"","frontmatter":{},"headers":[],"relativePath":"bigdata/hadoop/hadoop-control.md","filePath":"bigdata/hadoop/hadoop-control.md"}'),a={name:"bigdata/hadoop/hadoop-control.md"},c=e('<h1 id="hadoop基本操作" tabindex="-1">hadoop基本操作 <a class="header-anchor" href="#hadoop基本操作" aria-label="Permalink to &quot;hadoop基本操作&quot;">​</a></h1><h3 id="hadoop" tabindex="-1">hadoop <a class="header-anchor" href="#hadoop" aria-label="Permalink to &quot;hadoop&quot;">​</a></h3><table><thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>hadoop dfsadmin -report</code></td><td>显示HDFS集群的详细报告</td><td></td></tr><tr><td><code>hadoop dfsadmin -setAdminState</code></td><td>设置HDFS的admin状态，使其可以进行格式化、namenode重启等操作</td><td><code>hadoop dfsadmin -setAdminState false</code></td></tr><tr><td><code>hadoop dfs -ls</code></td><td>列出HDFS上的目录和文件</td><td><code>hadoop dfs -ls /</code></td></tr><tr><td><code>hadoop dfs -mkdir</code></td><td>在HDFS上创建目录</td><td><code>hadoop dfs -mkdir /mydir</code></td></tr><tr><td><code>hadoop dfs -rm</code></td><td>删除HDFS上的目录或文件</td><td><code>hadoop dfs -rm -r /mydir</code></td></tr><tr><td><code>hadoop dfs -put</code></td><td>将本地文件或目录上传到HDFS</td><td><code>hadoop dfs -put /local/file /hdfs/file</code></td></tr><tr><td><code>hadoop dfs -get</code></td><td>从HDFS下载文件或目录到本地</td><td><code>hadoop dfs -get /hdfs/file /local/file</code></td></tr><tr><td><code>hadoop fs -copyToLocal</code></td><td>将HDFS上的文件复制到本地</td><td><code>hadoop fs -copyToLocal /hdfs/file /local/file</code></td></tr><tr><td><code>hadoop fs -copyFromLocal</code></td><td>将本地文件复制到HDFS</td><td><code>hadoop fs -copyFromLocal /local/file /hdfs/file</code></td></tr><tr><td><code>hadoop fs -mv</code></td><td>重命名HDFS上的文件或目录</td><td><code>hadoop fs -mv /oldfile /newfile</code></td></tr><tr><td><code>hadoop fs -chmod</code></td><td>修改HDFS上的文件或目录的权限</td><td><code>hadoop fs -chmod 777 /file</code></td></tr><tr><td><code>hadoop fs -chown</code></td><td>修改HDFS上的文件或目录的所有者</td><td><code>hadoop fs -chown user /file</code></td></tr><tr><td><code>hadoop fs -help</code></td><td>显示Hadoop文件系统的所有命令</td><td></td></tr><tr><td><code>hadoop help</code></td><td>显示Hadoop的命令行帮助</td><td></td></tr><tr><td><code>hadoop version</code></td><td>显示Hadoop的版本信息</td><td></td></tr><tr><td><code>hadoop namenode -format</code></td><td>格式化namenode，创建一个新的HDFS集群</td><td><code>hadoop namenode -format</code></td></tr><tr><td><code>hadoop namenode -bootstrapStandby</code></td><td>将一个standby namenode提升为active namenode</td><td><code>hadoop namenode -bootstrapStandby</code></td></tr><tr><td><code>hadoop dfsadmin -safemode leave</code></td><td>将HDFS从安全模式退出</td><td><code>hadoop dfsadmin -safemode leave</code></td></tr><tr><td><code>hadoop dfsadmin -safemode enter</code></td><td>将HDFS进入安全模式，防止写入操作</td><td><code>hadoop dfsadmin -safemode enter</code></td></tr><tr><td><code>hadoop dfsadmin -refreshNodes</code></td><td>刷新HDFS上的节点状态，包括active、standby和down节点</td><td><code>hadoop dfsadmin -refreshNodes</code></td></tr><tr><td><code>hadoop dfsadmin -removeLeader</code></td><td>移除HDFS集群中的一个namenode</td><td><code>hadoop dfsadmin -removeLeader</code></td></tr><tr><td><code>hadoop dfsadmin -addLeader</code></td><td>在HDFS集群中添加一个namenode</td><td><code>hadoop dfsadmin -addLeader</code></td></tr></tbody></table><hr><h3 id="hdfs" tabindex="-1">hdfs <a class="header-anchor" href="#hdfs" aria-label="Permalink to &quot;hdfs&quot;">​</a></h3><table><thead><tr><th>命令</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>hdfs dfs -ls</code></td><td>列出HDFS上的文件和目录</td><td><code>hdfs dfs -ls /</code></td></tr><tr><td><code>hdfs dfs -ls -R</code></td><td>递归列出HDFS上的文件和目录</td><td><code>hdfs dfs -ls -R /</code></td></tr><tr><td><code>hdfs dfs -mkdir</code></td><td>在HDFS上创建目录</td><td><code>hdfs dfs -mkdir /mydir</code></td></tr><tr><td><code>hdfs dfs -rm</code></td><td>删除HDFS上的目录或文件</td><td><code>hdfs dfs -rm -r /mydir</code></td></tr><tr><td><code>hdfs dfs -put</code></td><td>将本地文件或目录上传到HDFS</td><td><code>hdfs dfs -put /local/file /hdfs/file</code></td></tr><tr><td><code>hdfs dfs -get</code></td><td>从HDFS下载文件或目录到本地</td><td><code>hdfs dfs -get /hdfs/file /local/file</code></td></tr><tr><td><code>hdfs fs -copyToLocal</code></td><td>将HDFS上的文件复制到本地</td><td><code>hdfs fs -copyToLocal /hdfs/file /local/file</code></td></tr><tr><td><code>hdfs fs -copyFromLocal</code></td><td>将本地文件复制到HDFS</td><td><code>hdfs fs -copyFromLocal /local/file /hdfs/file</code></td></tr><tr><td><code>hdfs fs -mv</code></td><td>重命名HDFS上的文件或目录</td><td><code>hdfs fs -mv /oldfile /newfile</code></td></tr><tr><td><code>hdfs fs -chmod</code></td><td>修改HDFS上的文件或目录的权限</td><td><code>hdfs fs -chmod 777 /file</code></td></tr><tr><td><code>hdfs fs -chown</code></td><td>修改HDFS上的文件或目录的所有者</td><td><code>hdfs fs -chown user /file</code></td></tr><tr><td><code>hdfs dfs -dfsadmin -report</code></td><td>显示HDFS集群的详细报告</td><td><code>hdfs dfs -dfsadmin -report</code></td></tr><tr><td><code>hdfs dfs -dfsadmin -setAdminState</code></td><td>设置HDFS的admin状态，使其可以进行格式化、namenode重启等操作</td><td><code>hdfs dfs -dfsadmin -setAdminState false</code></td></tr><tr><td><code>hdfs dfs -dfsadmin -bootstrapStandby</code></td><td>将一个standby namenode提升为active namenode</td><td><code>hdfs dfs -dfsadmin -bootstrapStandby</code></td></tr><tr><td><code>hdfs dfs -dfsadmin -safemode leave</code></td><td>将HDFS从安全模式退出</td><td><code>hdfs dfs -dfsadmin -safemode leave</code></td></tr><tr><td><code>hdfs dfs -dfsadmin -safemode enter</code></td><td>将HDFS进入安全模式，防止写入操作</td><td><code>hdfs dfs -dfsadmin -safemode enter</code></td></tr><tr><td><code>hdfs dfs -dfsadmin -refreshNodes</code></td><td>刷新HDFS上的节点状态，包括active、standby和down节点</td><td><code>hdfs dfs -dfsadmin -refreshNodes</code></td></tr><tr><td><code>hdfs dfs -dfsadmin -removeLeader</code></td><td>移除HDFS集群中的一个namenode</td><td><code>hdfs dfs -dfsadmin -removeLeader</code></td></tr><tr><td><code>hdfs dfs -dfsadmin -addLeader</code></td><td>在HDFS集群中添加一个namenode</td><td><code>hdfs dfs -dfsadmin -addLeader</code></td></tr></tbody></table>',6),s=[c];function f(r,h,n,i,m,l){return t(),o("div",null,s)}const F=d(a,[["render",f]]);export{S as __pageData,F as default};
