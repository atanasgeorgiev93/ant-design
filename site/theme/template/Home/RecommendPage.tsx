import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Typography } from 'antd';
import './RecommendPage.less';

const { Title, Paragraph } = Typography;

interface Recommend {
  title: string;
  img: string;
  href: string;
  popularize?: boolean;
  description: string;
}

const LIST: Recommend[] = [
  {
    title: '语雀·我们都喜欢的文档工具',
    description:
      '「语雀」致力于打造新一代 Office，是一个「专业的云端知识库」。在阿里内部已是 10 万员工进行文档编写、知识沉淀的标配。',
    img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*2_q2TZo-_zoAAAAAAAAAAABkARQnAQ',
    href: 'https://www.yuque.com/dashboard',
    popularize: true,
  },
  {
    title: 'AntV·让数据栩栩如生',
    description:
      'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
    img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*5hxoQ4wUm9kAAAAAAAAAAABkARQnAQ',
    href: 'https://antv.vision/zh',
  },
  {
    title: 'Kitchen·让你的设计秀色可餐',
    description: '一款为设计者提升工作效率的 Sketch 工具集',
    img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*2b-XQJuyRSwAAAAAAAAAAABkARQnAQ',
    href: 'https://kitchen.alipay.com/',
  },
];

interface RecommendBlockProps extends Recommend {
  main?: boolean;
  img: string;
  href: string;
}

const RecommendBlock = ({
  main,
  title,
  popularize,
  description,
  img,
  href,
}: RecommendBlockProps) => {
  return (
    <a
      className={classNames('recommend-block', main && 'main')}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={img} alt={title} />
      {popularize && (
        <span className="recommend-popularize">
          <FormattedMessage id="app.home.popularize" />
        </span>
      )}
      <div className="recommend-content">
        <Title level={4}>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </div>
    </a>
  );
};

export default function RecommendPage() {
  return (
    <Row gutter={[24, 24]} style={{ marginBottom: -36 }}>
      <Col xs={24} sm={14}>
        <RecommendBlock {...LIST[0]} main />
      </Col>
      <Col xs={24} sm={10}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <RecommendBlock {...LIST[1]} />
          </Col>
          <Col span={24}>
            <RecommendBlock {...LIST[2]} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}