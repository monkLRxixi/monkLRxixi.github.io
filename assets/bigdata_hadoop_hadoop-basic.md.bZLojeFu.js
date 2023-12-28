import{_ as a,o as e,c as o,Q as d}from"./chunks/framework.gI2xCOxE.js";const b=JSON.parse('{"title":"hadoop基本了解","description":"","frontmatter":{},"headers":[],"relativePath":"bigdata/hadoop/hadoop-basic.md","filePath":"bigdata/hadoop/hadoop-basic.md"}'),r={name:"bigdata/hadoop/hadoop-basic.md"},i=d('<h1 id="hadoop基本了解" tabindex="-1">hadoop基本了解 <a class="header-anchor" href="#hadoop基本了解" aria-label="Permalink to &quot;hadoop基本了解&quot;">​</a></h1><h2 id="大数据特征" tabindex="-1">大数据特征 <a class="header-anchor" href="#大数据特征" aria-label="Permalink to &quot;大数据特征&quot;">​</a></h2><ol><li>体量大(Volume)</li><li>种类多(Variety)</li><li>速度快(Velocity)</li><li>价值高(Value)</li></ol><h2 id="大数据的处理流程" tabindex="-1">大数据的处理流程 <a class="header-anchor" href="#大数据的处理流程" aria-label="Permalink to &quot;大数据的处理流程&quot;">​</a></h2><p>大数据处理流程一般分为四个步骤:数据采集、数据导入和清洗预处理、数据分析、数据可视化。</p><ol><li>数据采集(Data Collection)</li><li>数据清洗</li><li>数据预处理</li><li>数据存储(Data Storage)</li><li>数据挖掘(Data Mining)</li><li>数据可视化(Data Visualization)</li></ol><h2 id="hadoop简介" tabindex="-1">hadoop简介 <a class="header-anchor" href="#hadoop简介" aria-label="Permalink to &quot;hadoop简介&quot;">​</a></h2><p>Hadoop是一个由Apache基金会所开发的分布式系统基础架构。具有可靠性、拓展性的分布式的计算存储系统。 是一个分布式系统基础架构用户可以在不了解分布式底层细节的情况下，开发分布式程序。充分利用集群的威力进行高速运算和存储。 它的目的是从单一的服务器扩展到成千上万的及其，将集群部署在多台机器，每个机器提供本地计算和存储。 hadoop框架最核心的设计是hdfs和mapreduce。</p><h3 id="hadoop四大核心组件" tabindex="-1">hadoop四大核心组件 <a class="header-anchor" href="#hadoop四大核心组件" aria-label="Permalink to &quot;hadoop四大核心组件&quot;">​</a></h3><ol><li>HDFS(Hadoop Distributed File System) 分布式文件系统，对应用提高吞吐量的访问</li><li>YARN(Yet Another Resource Negotiator) 资源管理和任务调度的一个框架</li><li>MapReduce 能够并行处理大数据集的Yarn基本系统</li><li>Common 支撑其他模块</li></ol><h3 id="hadoop特点" tabindex="-1">hadoop特点 <a class="header-anchor" href="#hadoop特点" aria-label="Permalink to &quot;hadoop特点&quot;">​</a></h3><ol><li>hadoop是一个能够对大量数据进行分布式处理的软件架构</li><li>hadoop是可靠的，因为它驾驶计算元素和存储会失败，因此它维护多个工作数据副本，确保能够针对失败的节点重新分布处理</li><li>hadoop是高效的，因为它以并行的方式工作，通过并行处理加快处理速度</li><li>hadoop是可伸缩的，它能够随着数据量的增加而增加节点，扩大集群</li><li>此外，hadoop依赖于社区服务，因此它的成本比较低，任何人都可以使用</li></ol><h2 id="hadoop核心组件" tabindex="-1">hadoop核心组件 <a class="header-anchor" href="#hadoop核心组件" aria-label="Permalink to &quot;hadoop核心组件&quot;">​</a></h2><p><strong>1. hadoop Common</strong> 一个公共基础设施，用于支撑其它项目，包括rpc、序列化、日志、配置等</p><p><strong>2. hadoop HDFS</strong> 可扩展、容错、高性能的分布式文件系统，异步复制，一次写入多次读取</p><p><strong>3. hadoop Mapreduce</strong> 分布式计算框架 主要包含map(映射)和reduce(规约)过程</p><h3 id="hdfs" tabindex="-1">HDFS <a class="header-anchor" href="#hdfs" aria-label="Permalink to &quot;HDFS&quot;">​</a></h3><p>分布式文件系统(HDFS,Hadoop Distributed File System)</p><ul><li>高度容错性的系统 上传的数据自动保存多个副本，适合部署在廉价的机器上</li><li>适合大数据的处理 高吞吐量的数据访问，非常适合大规模数据集上的应用</li><li>流式文件写入 一次写入，多次读取。文件一旦写入，不能修改，只能增加。这样可以保证数据的一致性</li></ul><h4 id="namenode-一个" tabindex="-1">NameNode(一个) <a class="header-anchor" href="#namenode-一个" aria-label="Permalink to &quot;NameNode(一个)&quot;">​</a></h4><p>用于存储元数据以及处理客户端发出的请求;</p><h4 id="secondarynamenode-一个" tabindex="-1">SecondaryNameNode(一个) <a class="header-anchor" href="#secondarynamenode-一个" aria-label="Permalink to &quot;SecondaryNameNode(一个)&quot;">​</a></h4><p>备份NameNode中的数据，一个Checkpoint来帮助NameNode更好的工作 用于监控HDFS状态的辅助后台程序，每隔一段时间获取HDFS元数据的快照</p><h4 id="datanode-多个" tabindex="-1">DataNode(多个) <a class="header-anchor" href="#datanode-多个" aria-label="Permalink to &quot;DataNode(多个)&quot;">​</a></h4><p>存储实际的数据块，执行数据块的读/写操作,为HDFS提高储存位置，真正存储数据的地方，将文件以数据块的形式进行存储</p><p>对外部客户机而言，hdfs就像一个传统的分级文件系统，可以创建、删除、移动或者重命名文件等等</p><h4 id="分布式文件系统概念" tabindex="-1">分布式文件系统概念 <a class="header-anchor" href="#分布式文件系统概念" aria-label="Permalink to &quot;分布式文件系统概念&quot;">​</a></h4><p>划分成<code>多个子系统或模块</code>，各自运行在<code>不同的机器</code>上,子系统或模块之间<code>通过网络通信协议进行协作</code>，实现最终的整体性能。 利用<code>多个节点共同协作</code>完成一项或多项具体业务功能的 系统就是分布式系统。</p><h4 id="分布式文件系统的体现" tabindex="-1">分布式文件系统的体现 <a class="header-anchor" href="#分布式文件系统的体现" aria-label="Permalink to &quot;分布式文件系统的体现&quot;">​</a></h4><ul><li><p>HDFS并不是一个单机文件系统，它是<code>分布在多个集群节点上</code>的文件系统。 节点之间<code>通过网络通信进行协作</code>，提供<code>多个节点文件</code>信息，让<code>每个用户</code>都 可以看到文件系统的文件，让<code>多机器</code>上的多用户分享文件和存储空间。</p></li><li><p>文件存储时被<code>分布在多个节点上</code>。这里涉及到一个数据块的概念，数据存 储<code>不是按一个文件存储</code>， 而是把<code>一个文件分成一 个或多 个数据块</code>存储，数 据块的概念在上一节已经描述过。数据块在存储时<code>并不是都存在一个节点</code> 上，而是<code>被分布存储在各个节点中</code>，并且数据块会<code>在其他节点存储副本</code>。</p></li><li><p>数据读取<code>从多个节点读取</code>。读取-个文件时，<code>从多个节点中找到该文件的数据块，分布读取所有数据块</code>直到<code>最后-个数据块读取完毕</code>。</p></li></ul><h4 id="hdfs宕机处理" tabindex="-1">HDFS宕机处理 <a class="header-anchor" href="#hdfs宕机处理" aria-label="Permalink to &quot;HDFS宕机处理&quot;">​</a></h4><ol><li>冗余备份 对每个数据块都进行了备份，副本数可以自行设置</li><li>副本存放 以三个副本为例，在同一个机器的两个节点上各备份一个副本，然后在另一台机器的某个节点上再方一个副本。前者防止该机器的某个节点宕机，后者防止某个机器宕机</li></ol><ul><li><code>DataNode会周期性发送心跳信息给NameNode</code>。如果NameNode在预定时间内没收到心跳信息，会认为DataNode出问题了，把它从集群中移除。HDFS检测到数据块的副本数低于要求时，会主动创建副本，以达到满副本数的状态。</li><li><code>当HDFS读取某数据块时</code>，如果正好该节点宕机了，客户端就会到存储该数据块的其他节点上读取。HDFS也会检测到该数据块副本个数不符合要求而重新补全副本。</li><li><code>当HDFS存储数据时</code>，如果要存放数据的节点宕机，HDFS会再分配一个节点数据块，然后备份宕机节点的数据。</li></ul><h3 id="mapreduce" tabindex="-1">MapReduce <a class="header-anchor" href="#mapreduce" aria-label="Permalink to &quot;MapReduce&quot;">​</a></h3><p>一个并行计算框架</p><ul><li>MapReduce是Google提出的一个软件架构、Hadoop的核心计算框架，是 用于大规模数据集(大于1TB) 并行运算的编程模型，主要包括<code>&quot;Map (映射)&quot;</code>和<code>&quot;Reduce (归纳)&quot;</code>两部分。</li><li>MapReduce的核心思想:<br> 当启动-个MapReduce任务时 ，Map端会读取HDFS_上的数据，将数据映射成所需要的键值对并传入到Reduce端。Reduce端接收Map端传过来的键值对数据，根据不同键进行分组，对每组键相同的数据进行处理，得到新的键值对并输出到HDFS。</li></ul><p><strong>一个完整的MapReduce过程包括:</strong><br> 数据的输入和分片、Map阶段数据处理、Reduce阶段数据处理、数据的输出等阶段</p><p><strong>(1) input读取输入数据:</strong><br> MapReduce过程中的数据是从HDFS分布式文件系统中读取的。在运行MapReduce时会根据所设置的分片大小对文件重新分割(Split) ，一个分片大小的数据块就会对应一个Map.</p><p><strong>(2)Map阶段:</strong><br> 数据以键值对的形式读入，键的值一般为每行首字符与文件最初始位置的偏移量，即中间所隔字符个数，值为这一行的数据记录。根据需求对键值对进行处理，映射成新的键值对,将新的键值对传入Reduce端。</p><p><strong>(3) Shuffle/Sort阶段:</strong><br> 传送Map输出到Reduce作为输入的过程。该过程会将同一个Map中输出的键相同的数据先进行一步整合， 减少传输的数据量，并且在整合后将数据按照键排序。</p><p><strong>(4)Reduce阶段:</strong><br> 按照Map阶段设置的数据分区，一个分区数据被一个Reduce处理。针对每一个Reduce任务， Reduce会接收到不同Map任务传来的数据，并且每个Map传来的数据都是有序的。一个Reduce任务中的每一次处理都是针对所有键相同的数据， 对数据进行规约，以新的键值对输出到HDFS。</p><h4 id="mapreduce的本质" tabindex="-1">MapReduce的本质 <a class="header-anchor" href="#mapreduce的本质" aria-label="Permalink to &quot;MapReduce的本质&quot;">​</a></h4><p>mapreduce本质就是把一组键值对经过map阶段映射成新的键值对，接着经过shuffle/sort阶段进行排序和&quot;洗牌&quot;，把键值对排序，同时把相同的键的值进行整合，最后经过Reduce阶段，把整合后的键值对进行逻辑处理，输出新的键值对</p><h3 id="yarn" tabindex="-1">Yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;Yarn&quot;">​</a></h3><p>hadoop hdfs是hadoop的数据存储层，hadoop mapreduce是数据处理层。然而，mapreduce已经不能满足今天广泛的数据处理需求，如实时计算/准实时计算、图计算等。而hadoop yarn提供了一个更加通用的资源管理和分布式应用框架。在这个框架上，用户可以根据自己的需求实现定制化的数据处理应用。而hadoop mapreduce只是yarn的一个子项目，也是yarn上的一个应用。yarn的另一个目标就是拓展hadoop，使它不仅可以支持mapreduce计算，还能很方便地管理诸如hive、hbase、Pig、Spark/Shark等应用</p><p>这种新的架构设计能够使得各种类型的应用运行在上面，并通过yarn从系统层面进行统一的管理，也就是说，有了yarn，各种应用就可以互不干扰地运行在同一个hadoop系统中，共享整个集群资源</p><p>YARN总体_上仍然是Master/Slave结构，在整个资源管理框架中，ResourceManager为Master, NodeManager为Slave,ResourceManager负责对各个NodeManager上的资源进行统一管理和调度。当用户提交一个应用程序时，需要提供一个用于跟踪和管理这个程序ApplicationMaster,它负责向ResourceManager申请资源，并要求NodeManager启动可以占用一-定资源的任务。由于不同的ApplicationMaster被分布到不同的节点上，因此它们之间不会相互影响。</p><h4 id="yarn的组成" tabindex="-1">Yarn的组成 <a class="header-anchor" href="#yarn的组成" aria-label="Permalink to &quot;Yarn的组成&quot;">​</a></h4><p>YARN主要由ResourceManager、NodeManager、ApplicationMaster和Client Application等构成。</p><ol><li><strong>ResourceManager</strong>：<br> 负责对集群中的资源进行统一管理和调度，它是整个集群资源的主管理器。主要<code>由调度器和应用程序管理器</code>组成</li><li><strong>NodeManager</strong>：<br> 负责管理单个节点上的资源，并向ResourceManager进行注册和汇报状态。</li><li><strong>ApplicationMaster</strong>：<br> 负责向ResourceManager申请资源并分配给内部的任务，同时要负责监控任务执行的状态，并在任务执行失败时重新申请资源以重启任务。</li><li><strong>Client Application</strong>：<br> 客户端应用程序。客户端将应用程序提交到RM，首先会创建一个Application上下我呢见对象，并设置AM必须的资源请求信息，然后提交到RM</li></ol>',50),l=[i];function t(c,p,h,n,s,u){return e(),o("div",null,l)}const g=a(r,[["render",t]]);export{b as __pageData,g as default};
